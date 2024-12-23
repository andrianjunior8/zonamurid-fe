import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-lg h-20 p-6 flex items-center justify-start z-50 relative">
      <div className="grid grid-cols-3 gap-2">
        <div className="grid grid-cols-4 gap-2 justify-center items-center col-span-1">
          <Link href={"/"} className="grid">
            <Image
              width={150}
              height={150}
              src={"/assets/logo_zonamurid.png"}
              alt={"logo"}
            />
          </Link>
          <Link
            href={"/about"}
            className="grid text-lg justify-center items-center font-mono font-bold"
          >
            About
          </Link>
          <Link
            href={"/courses"}
            className="grid text-lg justify-center items-center font-bold"
          >
            Courses
          </Link>
          <Link
            href={"/feature"}
            className="grid text-lg justify-center items-center font-bold"
          >
            Feature
          </Link>
        </div>
        <div className="grid right-0 items-center justify-center absolute mr-10 ">
          <Link
            href={"/register"}
            className="flex w-36 text-lg justify-center items-center text-center rounded-md text-white p-1 bg-[#F9975D] "
          >
            <button>Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
