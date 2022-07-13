import React from "react";
import { SearchFilms } from "../../components/SearchFilms";
import Link from "next/link";
import { getBaseLayout } from "../../components/Layout/BaseLayout";
const Search = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <SearchFilms />
    </div>
  );
};

Search.getLayout = getBaseLayout;
export default Search;
