import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Side with Images */}
        <div className="relative mt-[-100px] top-0 left-0 w-screen h-screen bg-cover bg-center z-0">
          <img
            src="/assets/background.png"
            className="absolute top-0 left-0 md:h-screen  object-cover"
            alt="Background"
          />
          <img
            src="/assets/dashboard.png"
            className="absolute top-0 left-0 md:h-screen object-cover opacity-75"
            alt="Dashboard"
          />
        </div>

        {/* Right Side with Content */}
        <div className="grid justify-center items-center h-screen px-4">
          <div className="gap-2 grid text-center md:text-left">
            <div className="text-[32px] md:text-[48px] lg:text-[71px] font-sans">
              Learn from Basic
            </div>
            <div className="text-[14px] md:text-[17px] text-slate-500 font-mono">
              Video tutorials, Best tutors, Downloadable files, and notes
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Register Button */}
              <div className="grid">
                <Link
                  className="border border-[#F9975D] font-sans text-[#F9975D] text-[16px] md:text-[20px] lg:text-[27.5px] rounded-md flex justify-center items-center py-2 md:py-3 z-50"
                  href="/register"
                >
                  Register Now
                </Link>
              </div>
              {/* Login Button */}
              <div className="grid">
                <Link
                  className="bg-[#F9975D] font-sans text-white text-[16px] md:text-[20px] lg:text-[27.5px] rounded-md flex justify-center items-center py-2 md:py-3 z-50"
                  href="/login"
                >
                  <button>Login</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
