"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();

  const handleBtn = () => {
    const password = prompt("Enter your password");
    if (password == "1234") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="text-center bg-linear-60 from-sky-300 to-sky-600 p-10 space-y-5">
      <h1 className="text-2xl font-semibold">Banner page is loading Now</h1>
      <button
        onClick={handleBtn}
        className="px-4 py-2 bg-blue-800 rounded-xl hover:bg-black duration-300 cursor-pointer"
      >
        Click Me
      </button>
    </div>
  );
};

export default Banner;
