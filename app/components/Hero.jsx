import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-blue-900 p-10 px-5 md:px-10 lg:px-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 md:pt-20">
        <div>
          <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-white">
            Bringing You the Best, One Click at a Time!
          </h2>
          <p className="text-gray-200 mt-3 text-sm md:text-base lg:text-lg">
            Discover a seamless shopping experience with unbeatable deals,
            top-quality products, and fast delivery. From fashion to gadgets, we
            have everything you need—all in one place!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-5">
            <Button>Explore</Button>
            <Link href={"/dashboard"}>
              <Button className="bg-red-500">Sell</Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src={"/p1.png"}
            alt="hero image"
            width={300}
            height={300}
            className="w-full max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
