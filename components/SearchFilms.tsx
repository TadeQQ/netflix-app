import React from "react";
import { searchMedia, MediaList } from "../utils/api";
import { useEffect, useState } from "react";
export const SearchFilms: React.FC = () => {
  const searchFilms = async () => {
    // const search = await searchMedia(value);
  };
  return (
    <div>
      <input type="search" placeholder="search film" />
      <button type="submit"> srch</button>
    </div>
  );
};
