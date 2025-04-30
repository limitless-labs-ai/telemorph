import React from "react";
import Image from "next/image";
import Brand from "@/config/landing/logo";

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Image src={Brand.logo} alt="Logo" width={24} height={24} />
      <div className="flex items-center">
        <span className={Brand.nameStyle1}>{Brand.name_half1}</span>
        <span className={Brand.nameStyle2}>{Brand.name_half2}</span>
      </div>
    </div>
  );
}

export default Logo;
