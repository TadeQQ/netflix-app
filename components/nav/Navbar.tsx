import React from "react";
import Link from "next/link";
import { Logo } from "../logo/Logo";
import { root, search, icon } from "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
export const Navbar = () => {
  return (
    <nav className={root}>
      <div>
        <Link href="/">
          <a>
            {" "}
            <Logo />
          </a>
        </Link>
      </div>
      <div className={search}>
        <SearchIcon className={icon} />
        <Link href="/search">
          <a> Search film</a>
        </Link>
      </div>
    </nav>
  );
};
