import React from "react";
import { ResponseHandler } from "../types/ResponseHandler";
import { fetchGenres, Genres, MediaList } from "../utils/api";
import { useState, useEffect } from "react";
interface UseFetchGenres extends ResponseHandler<MediaList[]> {
  genre: Genres;
}

export const useFetchGenres = ({
  onSuccess,
  onError,
  genre,
}: UseFetchGenres) => {
  const [genres, setGenres] = useState<MediaList[]>([]);
  const getGenre = async () => {
    try {
      const fetchedGenre = await fetchGenres(genre);
      setGenres(fetchedGenre);
      onSuccess?.(fetchedGenre);
      console.log(fetchedGenre);
    } catch (err) {
      onError?.(err as Error);
    }
  };

  useEffect(() => {
    getGenre();
  }, [genre]);
  return genres;
};
