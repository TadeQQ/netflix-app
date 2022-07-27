import React from "react";
import { MediaList } from "../../../utils/api";

interface GenresProps {
  film: MediaList;
}
export const GenresList = ({ film }: GenresProps) => {
  return (
    <div>
      <div className="categories">{film.genres[1]}</div>
    </div>
  );
};

// mediaList.filter((item) =>
//           item.title.toLowerCase().includes(query.toLowerCase())
//         )
//       );
