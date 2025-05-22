"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/common/logo.svg";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    
    console.log('for future use', isOpen ? "menu opened" : "menu closed");
    setIsOpen(!isOpen);
  };

  return (
      <div className="flex justify-between items-start p-4 sm:px-2 mt-0 sm:mt-[30px] relative">
       {/* this blank span is for design purpose */}
       <span className="sm:hidden"></span>
        <Image
          src={logo}
          alt="Fametonic"
          width={170}
          height={72}
          className="w-[105px] h-[44px] sm:w-[170px] sm:h-[72px] object-contain"
        />

      {/* links */}
      <div className="hidden sm:flex justify-center items-center font-figtree gap-8 text-[18px] md:me-[100px] lg:me-[200px]">
        <Link href="/" className="text-[#A9A9A9]">
          About us
        </Link>
        <Link href="/" className="text-[#A9A9A9]">
          Contact
        </Link>
      </div>

      {/* menu */}
      <button className="sm:hidden text-white" onClick={handleMenuClick}>
        <Menu className="w-6 h-6" />
      </button>
      
    </div>
  );
};

export default Navbar;
