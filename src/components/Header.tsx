import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropDown from "./GenreDropDown";

function Header() {
  return (
    <header className="fixed w-full top-0 z-20 flex p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/50 to-gray-900 justify-between  items-center">
      <Link href="/">
        <Image
          alt="Disney logo"
          width={120}
          height={100}
          className="dark:invert cursor-pointer"
          src="https://links.papareact.com/a943ae"
        />
      </Link>
      <section className="flex space-x-2">
        <GenreDropDown />
        <SearchInput />
        <ThemeToggler />
      </section>
    </header>
  );
}

export default Header;
