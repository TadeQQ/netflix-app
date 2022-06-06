import React from "react";
import { fetchMediaList, MediaList } from "../utils/api";
import { useEffect, useState } from "react";
import { sort } from "../utils/sort";
export const List: React.FC = () => {
  const [films, setFilms] = useState<MediaList[]>([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const media = await fetchMediaList(10, page);

    setFilms((prevFilms) => sort([...prevFilms, ...media]));
  };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const nextPage = () => {
  //   setPage((prev) => prev + 1);
  // };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <div>
        {films.map((el, i) => (
          <div key={i}>
            {el.title} <button>add</button>
          </div>
        ))}
        <button onClick={() => setPage((prev) => prev + 1)}>
          load 10 more
        </button>
      </div>
    </div>
  );
};
