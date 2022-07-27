import React from "react";
import { ResponseHandler } from "../types/ResponseHandler";
import { fetchGenres } from "../utils/api";
import { useState } from "react";

interface UseFetchGenres extends ResponseHandler {
  genre: [string];
}

export const useFetchGenres = ({
  onSuccess,
  onError,
  genre,
}: UseFetchGenres) => {
  const [genres, setGenres] = useState<MediaList[]>([]);
 const getGenre = async () => {
  try {
    const fetchedGenre = await fetchGenres(genre)
    setGenres(fetchedGenre);
    onSuccess?.(fetchedGenre)
    console.log(fetchedGenre)
  }
 }
  // useEffect(() )
  return genres;
};
