import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { ShoppingBag } from "lucide-react";
import React from "react";
import Link from "next/link";

function Header() {
  const menuList = [
    { name: "Home", path: "/" },
    { name: "Store", path: "/store" },
    { name: "Explore", path: "/explore" },
  ];

  return (
    <div className="flex flex-col md:flex-row p-4 px-5 md:px-10 lg:px-32 xl:px-48 bg-primary border-b-4 border-black justify-between items-center">
      <h2 className="font-bold bg-black text-white px-2 p-1 text-lg md:text-xl lg:text-2xl">
        {" "}
        BUYNEST{" "}
      </h2>
      <ul className="flex flex-wrap gap-3 md:gap-5 mt-3 md:mt-0">
        {menuList.map((menu, index) => (
          <li
            className="px-2 p-1 cursor-pointer hover:border-white text-sm md:text-base lg:text-lg"
            key={index}
          >
            {menu?.name}
          </li>
        ))}
      </ul>
      <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-center mt-3 md:mt-0">
        <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
        <Link href={"/dashboard"}>
          <Button className="bg-red-500 hover:bg-red-600 text-sm md:text-base px-3 py-1 md:px-4 md:py-2">
            Start Selling
          </Button>
        </Link>
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
