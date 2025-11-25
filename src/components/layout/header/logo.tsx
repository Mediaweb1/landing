import Link from "next/link";

export function Logo() {
  return (
    <Link
      className="h-10 flex items-center space-x-1 md:space-x-2 hover:scale-95 relative z-60 cursor-pointer"
      href="/"
    >
      <div className="h-10 w-10 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          width="100"
          height="100"
          className="flex items-center justify-center"
        >
          <defs>
            <linearGradient
              id="logoGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#581c87" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="url(#logoGradient)"
            stroke="url(#logoGradient)"
            strokeWidth="4"
          />
          <path
            transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
            className="fill-transparent"
            d="M56.545,11.262l-0.204-0.356H43.659l-38.8,67.202l6.342,10.987h77.729h0.407l5.803-10.987L56.545,11.262z"
          />
          <path
            transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
            stroke="url(#logoGradient)"
            fill="white"
            d="M93.081,77.395H28.517l4.196-6.993h17.282H78.83L45.302,12.332h10.213L93.081,77.395z"
          />
          <path
            transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
            stroke="transparent"
            fill="url(#logoGradient)"
            d="M33.557,68.729L50,40.249l16.443,28.481H33.557z"
          />
          <path
            transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
            stroke="transparent"
            fill="white"
            d="M68.179,68.729L45.443,28.881L11.764,87.217l-5.258-9.109L44.07,13.049l32.277,55.681H68.179"
          />
          <path
            transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
            stroke="url(#logoGradient)"
            fill="white"
            d="M88.508,87.643H13.166l32.266-55.887l3.875,6.843L36.479,60.814l0,0L26.042,78.821h67.039L88.508,87.643z"
          />
        </svg>
      </div>
      <span className="text-white font-semibold text-xl">Mediaweb</span>
    </Link>
  );
}
