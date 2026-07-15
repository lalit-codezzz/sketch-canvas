import { Link, Navigate, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { useRef, useState } from "react";
import { signupSchema } from "../schemas/auth.schema";
import GenericError from "../components/GenericError";
import { toast } from "react-toastify";
import type { ApiErrorType } from "../types/types";
import { useAuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";

export default function Signup() {

    const { isAuthenticated, isLoading, setIsAuthenticated, setToken } = useAuthContext();

    if (isLoading) {
        return <Loader />
    }

    if (isAuthenticated) {
        return <Navigate to="/user/dashboard" replace />
    }

    const navigate = useNavigate();
    const [isError, setIsError] = useState<boolean>(false);
    const [errMsg, setErrMsg] = useState<string>("");
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const { signup } = useAuth();
    const handleSubmit = async () => {

        const name = nameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const result = signupSchema.safeParse({ name, email, password });

        if (!result.success) {
            setIsError(true);
            setErrMsg(result.error.issues[0].message);
            return;
        }

        if (isError) {
            setIsError(false);
            setErrMsg("");
        }

        try {
            const data = await signup({ name: result.data.name, email: result.data.email, password: result.data.password });
            toast.success(`${data.message}`);
            localStorage.setItem("token", data.data.token);
            setIsAuthenticated(true);
            setToken(data.data.token);
            navigate("/user", { replace: true });
        } catch (error) {
            const err = error as ApiErrorType;
            toast.error(`${err.message}`)
            if (err.sc === 409) {
                navigate("/signin", { replace: true });
            }
        }

    }

    return (
        <section className="h-[90%] flex items-center justify-center px-6 bg-neutral-900">
            <div className="w-full max-w-sm rounded-xl p-8 bg-neutral-800 border border-neutral-700">
                <div className="relative text-center mb-8">
                    <button className="cursor-pointer absolute -top-6 -left-6 flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-neutral-800 border border-neutral-700 text-neutral-100 hover:bg-neutral-700 active:scale-95 transition" onClick={() => navigate("/")}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <h1 className="text-2xl font-medium tracking-tight text-neutral-100 mb-2">
                        Join Sketch Canvas
                    </h1>
                    <p className="text-sm text-neutral-400">
                        Start sketching with your team in minutes.
                    </p>
                </div>

                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                            Name
                        </label>
                        <input
                            ref={nameRef}
                            type="text"
                            placeholder="Jane Cooper"
                            className="w-full h-10 px-3 rounded-lg text-sm bg-neutral-900 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                            Email
                        </label>
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="name@company.com"
                            className="w-full h-10 px-3 rounded-lg text-sm bg-neutral-900 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                            Password
                        </label>
                        <input
                            ref={passwordRef}
                            type="password"
                            placeholder="At least 5 characters"
                            className="w-full h-10 px-3 rounded-lg text-sm bg-neutral-900 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                        />
                    </div>

                    {
                        (isError) && <GenericError message={errMsg} />
                    }

                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="cursor-pointer mt-2 h-10 rounded-lg text-sm font-medium bg-neutral-200 text-neutral-900 transition-colors duration-300 hover:bg-white"
                    >
                        Create account
                    </button>
                </form>

                <p className="text-xs text-center text-neutral-500 mt-6">
                    Already have an account?{" "}
                    <Link to={"/signin"} className="text-neutral-100 font-medium">Sign in</Link>
                </p>
            </div>
        </section>
    );
}