import React from "react";
import { SearchFilms } from "../../components/SearchFilms";
import Link from "next/link";

const Search = () => {
  return (
    <div>
      <Link href="/">
        <button> Powrót</button>
      </Link>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SearchFilms />
      </div>
    </div>
  );
};

export default Search;
