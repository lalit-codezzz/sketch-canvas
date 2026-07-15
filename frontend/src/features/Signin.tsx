import { Link, Navigate, useNavigate } from "react-router";

export default function Signin() {

    const token = localStorage.getItem("token");
    if (token) {
        return <Navigate to="/dashboard" replace />
    }

    const navigate = useNavigate();

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
                        Signin to Sketch Canvas
                    </h1>
                    <p className="text-sm text-neutral-400">
                        Pick up right where your team left off.
                    </p>
                </div>

                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="name@company.com"
                            className="w-full h-10 px-3 rounded-lg text-sm bg-neutral-900 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1.5">
                            <label className="block text-xs font-medium text-neutral-400">
                                Password
                            </label>
                            <Link to="/forgot-password" className="text-xs text-neutral-500 font-medium transition-colors duration-200 hover:text-neutral-400">
                                Forgot password?
                            </Link>
                        </div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full h-10 px-3 rounded-lg text-sm bg-neutral-900 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-neutral-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-2 h-10 rounded-lg text-sm font-medium bg-neutral-100 text-neutral-900"
                    >
                        Log in
                    </button>
                </form>

                <p className="text-xs text-center text-neutral-500 mt-6">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-neutral-100 font-medium">Sign up</Link>
                </p>
            </div>
        </section>
    );
}