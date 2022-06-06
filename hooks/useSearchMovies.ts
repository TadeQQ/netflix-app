import { searchMedia, MediaList } from "../utils/api";
import { useEffect, useState } from "react";
import { sort } from "../utils/sort";
import { debounce } from "ts-debounce";
export const useSearchMovies = (i: string) => {
  const [media, setMedia] = useState<MediaList[]>([]);
  const getData = async () => {
    const search = await searchMedia(i);
    setMedia(sort(search));
  };

  const debouncedGetData = debounce(getData, 2000);

  useEffect(() => {
    if (i.length > 2) {
      getData();
    }
    if (i.length > 4) {
      debouncedGetData();
    }
    if (i.length < 3) {
      setMedia([]);
    }
  }, [i]);

  return media;
};
