import { searchMedia, MediaList } from "../utils/api";
import React, { useEffect, useState } from "react";
import { sort } from "../utils/sort";
import { debounce } from "ts-debounce";
import { ResponseHandler } from "../types/ResponseHandler";
interface UseSearchMoviesProps extends ResponseHandler<MediaList[]> {
  query: string;
}

export const useSearchMovies = ({
  query,
  onError,
  onSuccess,
}: UseSearchMoviesProps) => {
  const [media, setMedia] = useState<MediaList[]>([]);
  const getData = async () => {
    try {
      const search = await searchMedia(query);
      setMedia(search);
      onSuccess?.(search);
    } catch (err) {
      onError?.(err as Error);
    }
  };

  const debouncedGetData = debounce(getData, 500);

  useEffect(() => {
    if (query.length > 2) {
      getData();
    }
    if (query.length > 3) {
      debouncedGetData();
    }
    if (query.length < 3) {
      setMedia([]);
    }
  }, [query]);

  return media;
};
