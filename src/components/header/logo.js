import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImg from "@/public/profile-pic.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className=" w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-light  mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="ByteBunny"
          className="w-full h-auto rounded-full dark:bg-stone-300"
          sizes="33vw" priority
        ></Image>
      </div>
      <span className="font-bold text-xl md:text-xl text-lg">ByteBunny</span>
    </Link>
  );
};

export default Logo;
