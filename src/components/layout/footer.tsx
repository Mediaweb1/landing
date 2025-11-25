import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative w-full">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 flex justify-center p-8 py-12 lg:p-12">
        <div className="w-full md:max-w-[80%] lg:max-w-[1200px] flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 justify-between">
            <div className="w-full md:w-fit flex flex-col space-y-8">
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
                        id="logoGradientFooter"
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
                      fill="url(#logoGradientFooter)"
                      stroke="url(#logoGradientFooter)"
                      strokeWidth="4"
                    />
                    <path
                      transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
                      className="fill-transparent"
                      d="M56.545,11.262l-0.204-0.356H43.659l-38.8,67.202l6.342,10.987h77.729h0.407l5.803-10.987L56.545,11.262z"
                    />
                    <path
                      transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
                      stroke="url(#logoGradientFooter)"
                      fill="white"
                      d="M93.081,77.395H28.517l4.196-6.993h17.282H78.83L45.302,12.332h10.213L93.081,77.395z"
                    />
                    <path
                      transform="scale(0.7) translate(26, 20) rotate(90, 50, 50)"
                      stroke="transparent"
                      fill="url(#logoGradientFooter)"
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
                      stroke="url(#logoGradientFooter)"
                      fill="white"
                      d="M88.508,87.643H13.166l32.266-55.887l3.875,6.843L36.479,60.814l0,0L26.042,78.821h67.039L88.508,87.643z"
                    />
                  </svg>
                </div>
                <span className="text-white font-semibold text-xl">
                  Mediaweb
                </span>
              </Link>

              <div className="flex flex-col space-y-2 mb-4">
                <p className="text-slate-300 max-w-96">
                  Portfolio Websites Simplified.
                </p>
                <p className="text-slate-400 max-w-96">
                  Create stunning portfolios in minutes with our AI assistant—or
                  take full control yourself. Perfect for artists, creators, and
                  influencers.
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="w-full lg:w-1/2 flex justify-between">
              <div className="flex flex-col space-y-4">
                <h6 className="text-2xl text-primary-400 font-semibold">
                  Product
                </h6>
                <Link
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                  href="/"
                >
                  Features
                </Link>
                <Link
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                  href="/pricing"
                >
                  Pricing
                </Link>
                <Link
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                  href="/"
                >
                  Templates
                </Link>
              </div>

              <div className="flex flex-col space-y-4">
                <h6 className="text-2xl text-primary-400 font-semibold">
                  Company
                </h6>
                <Link
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                  href="/privacy-policy"
                >
                  Privacy policy
                </Link>
                <Link
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                  href="/terms-of-service"
                >
                  Terms of service
                </Link>
                <Link
                  className="text-slate-300 hover:text-primary-400 transition-colors"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between items-center pt-4 md:pt-8 border-t border-slate-700">
            <div className="w-full sm:w-fit text-sm md:text-xl text-slate-400 whitespace-nowrap">
              © Mediaweb 2025
            </div>
            <div className="flex space-x-4 h-8 w-full justify-end">
              <a
                href="https://www.instagram.com/mediaweb_app"
                target="_blank"
                rel="noopener noreferrer"
                className="stroke-primary-400 h-8 w-8 md:h-10 md:w-10 rounded-lg border border-primary-400/30 bg-slate-800/50 p-1.5 cursor-pointer hover:stroke-primary-300 hover:border-primary-300 hover:bg-slate-700/50 transition-all flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
