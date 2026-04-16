import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative w-full">
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 flex justify-center p-8 py-12 lg:p-12">
        <div className="w-full md:max-w-[80%] lg:max-w-[1200px] flex flex-col justify-between">
          <div className="flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-24 justify-between">
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
                <p className="text-sm md:text-base text-slate-300 max-w-96">
                  Land more brand deals.
                </p>
                <p className="text-xs md:text-sm text-slate-400 max-w-96">
                  Your portfolio, mediakit, and link-in-bio — all in one place,
                  built by AI in minutes. Made for creators who want brands to
                  say yes.
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="w-full lg:w-2/3 flex justify-between">
              <div className="flex flex-col space-y-2 md:space-y-4">
                <Link href="/compare" className="text-lg md:text-2xl text-primary-400 font-semibold hover:text-primary-300 transition-colors">
                  Compare
                </Link>
                <Link
                  className="text-sm md:text-base text-slate-300 hover:text-primary-400 transition-colors"
                  href="/compare/mediakits-io"
                >
                  vs MediaKits.io
                </Link>
                <Link
                  className="text-sm md:text-base text-slate-300 hover:text-primary-400 transition-colors"
                  href="/compare/lovable"
                >
                  vs Lovable
                </Link>
                <Link
                  className="text-sm md:text-base text-slate-300 hover:text-primary-400 transition-colors"
                  href="/compare/linktree"
                >
                  vs Linktree
                </Link>
                <Link
                  className="text-sm md:text-base text-slate-300 hover:text-primary-400 transition-colors"
                  href="/compare/beacons"
                >
                  vs Beacons
                </Link>
              </div>

              <div className="flex flex-col space-y-2 md:space-y-4">
                <h6 className="text-lg md:text-2xl text-primary-400 font-semibold">
                  Product
                </h6>
                <Link
                  className="text-sm md:text-base text-slate-300 hover:text-primary-400 transition-colors"
                  href="/faq"
                >
                  FAQ
                </Link>
                <Link
                  className="text-sm md:text-base text-slate-300 hover:text-primary-400 transition-colors"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </div>

              <div className="flex flex-col space-y-2 md:space-y-4">
                <h6 className="text-lg md:text-2xl text-primary-400 font-semibold">
                  Company
                </h6>
                <Link
                  className="text-sm md:text-base text-slate-300 hover:text-primary-400 transition-colors"
                  href="/privacy-policy"
                >
                  Privacy policy
                </Link>
                <Link
                  className="text-sm md:text-base text-slate-300 hover:text-primary-400 transition-colors"
                  href="/terms-of-service"
                >
                  Terms of service
                </Link>
                <Link
                  className="text-sm md:text-base text-slate-300 hover:text-primary-400 transition-colors"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-4 pt-4 md:pt-8 border-t border-slate-700">
            <div className="w-full sm:w-fit text-sm md:text-xl text-slate-400 whitespace-nowrap">
              © Mediaweb 2026
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
              <a
                href="https://www.tiktok.com/@mediaweb.app"
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
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a
                href="https://www.pinterest.com/mediaweb_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 stroke-primary-400 h-8 w-8 md:h-10 md:w-10 rounded-lg border border-primary-400/30 bg-slate-800/50 p-1.5 cursor-pointer hover:text-primary-300 hover:stroke-primary-300 hover:border-primary-300 hover:bg-slate-700/50 transition-all flex items-center justify-center"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100%"
                  viewBox="0 0 512 512"
                  enableBackground="new 0 0 512 512"
                  stroke="currentColor"
                >
                  <path
                    fill="transparent"
                    opacity="1.000000"
                    stroke="white"
                    strokeWidth="20"
                    d="
M294.531342,1.000000 
	C297.778900,4.307861 301.885895,2.804511 305.231293,3.374725 
	C334.465729,8.357651 361.666901,18.296207 385.867584,35.619312 
	C411.528015,53.987312 429.932404,78.086533 441.189850,107.580070 
	C448.039490,125.525398 451.509766,144.063904 452.519775,163.321823 
	C454.074097,192.956741 448.415894,220.885254 436.247009,247.808182 
	C428.641937,264.633911 418.312866,279.451660 406.062256,293.151215 
	C387.103363,314.352448 364.342194,329.925629 337.685028,339.611572 
	C327.278839,343.392670 316.393585,345.352661 305.265778,346.577545 
	C284.996155,348.808716 265.611328,345.109619 246.587631,339.152527 
	C234.463989,335.356140 223.799133,328.442902 214.395721,319.770630 
	C213.445816,318.894592 212.788254,317.587067 211.034973,317.488403 
	C208.503387,318.896057 208.367142,321.830566 207.595291,324.213135 
	C197.559784,355.190796 187.215286,386.070801 174.865570,416.206177 
	C166.544250,436.511597 157.862198,456.765625 145.870041,475.239197 
	C138.753189,486.202515 130.382599,496.350586 122.616470,506.895203 
	C121.345749,508.620544 120.286430,510.501587 119.064697,512.655334 
	C117.933327,513.000000 116.866661,513.000000 115.399994,513.000000 
	C113.798271,501.311310 112.880653,489.583954 111.295456,477.947479 
	C110.228653,470.116425 110.268211,462.278473 110.851463,454.545319 
	C112.399712,434.017822 116.478271,413.865997 121.593674,393.943512 
	C128.818054,365.807373 137.205780,337.998993 145.309280,310.108398 
	C152.760483,284.462921 159.758163,258.693909 165.556885,232.596146 
	C167.868713,222.191559 164.147552,213.060532 162.070786,203.435516 
	C156.990555,179.890533 158.081406,156.845383 169.832138,135.312164 
	C179.959351,116.754059 195.829544,106.357819 217.233902,106.823334 
	C235.492157,107.220413 250.077240,115.976303 253.819855,135.687454 
	C255.868713,146.478043 254.257278,157.522079 251.961517,168.322983 
	C246.461456,194.199158 238.169022,219.280228 230.474747,244.536850 
	C225.551102,260.698761 229.875931,276.156830 241.479492,284.536865 
	C249.439240,290.285370 258.689880,293.075470 268.057648,295.389648 
	C291.226318,301.113190 312.107086,296.715820 330.507080,281.162476 
	C352.687897,262.413177 364.001160,237.429550 371.488373,210.240005 
	C375.889832,194.256409 377.849274,177.867325 376.495392,161.404114 
	C374.615601,138.546143 366.811554,117.936646 351.217834,100.475769 
	C331.191040,78.050926 305.488098,67.082336 276.583496,62.406254 
	C247.024612,57.624329 218.078674,60.573685 189.954895,70.725227 
	C172.894348,76.883400 157.151230,85.655846 144.495697,98.781998 
	C130.558731,113.237236 122.143929,130.589005 119.147888,150.726227 
	C117.800568,159.781937 116.646706,168.932114 116.701324,177.904144 
	C116.768272,188.900696 117.529327,200.033737 119.646751,211.000336 
	C122.201668,224.232758 125.309303,237.204895 131.666321,249.207275 
	C132.039734,249.912292 132.394730,250.879227 132.215454,251.586716 
	C129.824295,261.023285 127.336159,270.435272 124.786057,280.182556 
	C116.132698,277.730133 109.302979,273.420319 103.045425,268.300598 
	C79.106483,248.714691 67.254089,222.618912 63.656822,192.551788 
	C58.885357,152.670319 67.214577,115.490417 88.995293,81.688660 
	C103.642426,58.957596 123.193626,41.298561 146.787537,27.910814 
	C170.703476,14.340343 196.513077,6.927573 223.435959,2.766822 
	C228.339630,2.008992 233.324203,1.774720 238.635712,1.149379 
	C257.354218,1.000000 275.708466,1.000000 294.531342,1.000000 
z"
                  />
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
