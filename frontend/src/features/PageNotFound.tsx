import { useNavigate } from "react-router";

export default function PageNotFound() {
    const navigate = useNavigate();
  return (
    <section className="h-[90%] flex flex-col items-center justify-center text-center px-6 bg-neutral-900">
      <div className="rounded-lg mb-8 bg-neutral-800 border border-neutral-700 w-56 h-36 relative overflow-hidden">
        <svg viewBox="0 0 220 150" className="absolute inset-0 w-full h-full">
          <path
            d="M30 100 C50 80, 70 115, 90 90 C105 70, 120 100, 140 85"
            stroke="#F0997B"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="170" cy="45" r="18" fill="#3C3489" stroke="#7F77DD" />
          <rect x="25" y="30" width="60" height="40" rx="6" fill="#0C447C" stroke="#378ADD" />
          <path
            d="M150 100 L165 115 M165 100 L150 115"
            stroke="#737373"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <span className="text-xs font-medium tracking-wide px-3 py-1 rounded-full mb-5 bg-red-950 text-red-300">
        Error 404
      </span>
      <h1 className="text-4xl font-medium tracking-tight mb-3 text-neutral-100">
        This canvas doesn't exist
      </h1>
      <p className="text-base mb-8 max-w-sm text-neutral-400">
        The board you're looking for was moved, renamed, or never sketched in
        the first place.
      </p>

      <div className="flex items-center gap-3">
        <button className="cursor-pointer px-5 py-2.5 text-sm font-medium rounded-lg bg-neutral-200 text-neutral-900 transition-colors duration-300 hover:bg-white" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </section>
  );
}