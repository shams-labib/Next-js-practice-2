"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathName = usePathname();
  if (pathName.startsWith("/dashboard")) {
    return <></>;
  }

  return (
    <div>
      <nav className="flex justify-between items-center px-5 py-4 border-b shadow">
        <Link href={"/"}>Dev Story</Link>
        <ul className="flex gap-5">
          <Link href={"/about"}>About</Link>
          <Link href={"/story"}>Story</Link>
          <Link href={"/tutorials"}>Tutorials</Link>
          <Link href={"/contact"}>Contact</Link>
          <Link href={"/login"}>Login</Link>
          <Link href={"/register"}>Register</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
