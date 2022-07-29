import { searchMedia, MediaList } from "../utils/api";
import React, { useEffect, useState } from "react";
import { sort } from "../utils/sort";
import { debounce } from "ts-debounce";
import { ResponseHandler } from "../types/ResponseHandler";
import { useQuery } from "@tanstack/react-query";
interface UseSearchMoviesProps extends ResponseHandler<MediaList[]> {
  query: string;
}

export const useSearchMovies = ({
  query,
  onError,
  onSuccess,
}: UseSearchMoviesProps) => {
  // const [media, setMedia] = useState<MediaList[]>([]);
  // const getData = async () => {
  //   try {
  //     const search = await searchMedia(query);
  //     setMedia(search);
  //     onSuccess?.(search);
  //   } catch (err) {
  //     onError?.(err as Error);
  //   }
  // };
  const debouncedGetData = debounce(async () => await searchMedia(query), 500);

  const queryData = useQuery(
    ["search", query],
    async () => await debouncedGetData(),
    {
      enabled: query.length > 2,
      onError: (err) => {
        onError?.(err as Error);
      },
      onSuccess: (data) => {
        onSuccess?.(data);
      },
    }
  );

  // useEffect(() => {
  //   if (query.length > 2) {
  //     getData();
  //   }
  //   if (query.length > 3) {
  //     debouncedGetData();
  //   }
  //   if (query.length < 3) {
  //     setMedia([]);
  //   }
  // }, [query]);

  return queryData;
};
