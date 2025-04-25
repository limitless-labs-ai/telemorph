import React from "react";
import Image from "next/image";
import Brand from "@/config/landing/logo";

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image src={Brand.logo} alt="Logo" width={24} height={24} />
      <span className={Brand.nameStyle}>{Brand.name}</span>
    </div>
  );
}

export default Logo;
