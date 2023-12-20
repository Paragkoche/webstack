"use client";

import Link from "next/link";
import React from "react";
import Logo from "../svg/Logo";
import { UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { user, isLoaded } = useUser();

  return (
    <header id="header">
      <Link href="/">
        <Logo />
      </Link>
      {isLoaded && user && <UserButton afterSignOutUrl="/" />}
    </header>
  );
};

export default Header;
