import { MediaList } from "./api";

interface SortProps {
  films: MediaList[];
  favorites: number[];
}

export const sort = ({ films, favorites }: SortProps) => {
  const favArr = films
    .filter((film) => favorites.includes(film.id))
    .sort((a, b) => a.title.localeCompare(b.title));
  const notFavArr = films
    .filter((film) => !favorites.includes(film.id))
    .sort((a, b) => a.title.localeCompare(b.title));

  return [...favArr, ...notFavArr];
};
