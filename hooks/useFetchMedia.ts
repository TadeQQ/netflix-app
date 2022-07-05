import React, { useState, useEffect } from "react";
import { fetchMediaList, MediaList } from "../utils/api";
import { useFavorites } from "./useFavorites";
import { sort } from "../utils/sort";
import { ResponseHandler } from "../types/ResponseHandler";

interface UseFetchMedia extends ResponseHandler {
  limit?: number;
}

export const useFetchMedia = ({
  onSuccess,
  onError,
  limit = 10,
}: UseFetchMedia) => {
  const [films, setFilms] = useState<MediaList[]>([]);
  const { favorites } = useFavorites();
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    try {
      const films = await fetchMediaList(limit, page);
      setFilms((prevFilms) =>
        prevFilms
          ? sort({ films: [...prevFilms, ...films], favorites })
          : sort({ films, favorites })
      );
      onSuccess?.();
    } catch (err) {
      console.error(err);
      onError?.(err as Error);
    }
  };
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchData();
  }, [page]);
  useEffect(() => {
    setFilms((prev) => sort({ films: prev, favorites }));
  }, [favorites]);

  return { films, loadMore };
};
