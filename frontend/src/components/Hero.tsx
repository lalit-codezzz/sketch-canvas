import { Navigate, useNavigate } from "react-router";
import Loader from "./Loader";
import { useAuthContext } from "../context/AuthContext";

export default function Hero() {

    const { isAuthenticated, isLoading, setIsAuthenticated, setToken } = useAuthContext();

    if (isLoading) {
        return <Loader />
    }

    if (isAuthenticated) {
        return <Navigate to="/user/dashboard" replace />
    }

    const navigate = useNavigate();
    return (
        <section className="h-[90%] flex items-center bg-neutral-900">
            <div className="grid grid-cols-2 items-center gap-10 px-10 py-14 max-w-6xl mx-auto w-full">
                <div>
                    <h1 className="text-4xl font-medium tracking-tight mb-4 text-neutral-100 leading-tight">
                        Where great design comes together
                    </h1>
                    <p className="text-base mb-7 max-w-sm text-neutral-400">
                        A shared canvas for teams to sketch, review and refine ideas,
                        live, without leaving the room.
                    </p>
                    <div className="flex items-center gap-3 mb-8">
                        <button className="cursor-pointer px-5 py-2.5 text-sm font-medium rounded-lg bg-neutral-200 text-neutral-900 transition-colors duration-300 hover:bg-white" onClick={() => navigate("/signup")}>
                            Let's go
                        </button>
                    </div>
                </div>

                <div className="relative rounded-xl p-5 bg-neutral-800 border border-neutral-700">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        <span className="ml-auto text-xs text-neutral-500">
                            Q3 campaign board
                        </span>
                    </div>
                    <div className="rounded-lg bg-neutral-900 border border-neutral-700 h-56 relative overflow-hidden">
                        <svg viewBox="0 0 300 220" className="absolute inset-0 w-full h-full">
                            <rect x="20" y="20" width="90" height="60" rx="6" fill="#0C447C" stroke="#378ADD" />
                            <rect x="130" y="30" width="70" height="50" rx="6" fill="#3C3489" stroke="#7F77DD" />
                            <path d="M40 110 C60 95, 80 125, 100 108 C120 92, 140 118, 160 105" stroke="#F0997B" strokeWidth="2" fill="none" strokeLinecap="round" />
                            <circle cx="230" cy="90" r="26" fill="#085041" stroke="#1D9E75" />
                            <rect x="25" y="150" width="120" height="40" rx="6" fill="#262626" stroke="#525252" />
                        </svg>
                    </div>
                    <div className="absolute -bottom-3 -right-3 flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg bg-neutral-800 border border-neutral-700 text-neutral-100">
                        4 editing now
                    </div>
                </div>
            </div>
        </section>
    );
}