import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <div className="relative w-full h-52 bg-gray-200 flex items-center justify-center">
      <Image
        src="/top-hero-image.jpg"
        alt="coffee beans"
        fill
        style={{ objectFit: "cover" }}
        className="brightness-75"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-bold shadow-lg">
          珈琲喫茶 ease
        </h1>
        <desc className="text-white text-xs mt-2">
          厳選した珈琲豆をご注文を頂いてから焙煎する、
          <br />
          オーダー自家焙煎店です。
        </desc>
      </div>
    </div>
  );
};
