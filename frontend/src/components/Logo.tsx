export default function Logo() {
  return (
    <div className="flex items-center gap-3 p-4">
      <span className="text-3xl font-light tracking-tight text-white">
        Sketch
      </span>
      <span className="text-3xl font-medium tracking-tight relative text-blue-600">
        Canvas
        <svg
          className="absolute -bottom-2 left-0 w-full"
          height="6"
          viewBox="0 0 100 6"
          preserveAspectRatio="none"
        >
          <path
            d="M0 3 Q 25 0, 50 3 T 100 3"
            stroke="#D85A30"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </div>
  );
}