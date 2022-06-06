import useLocalStorage from "./useLocalStorage";

export const useFavorites = () => {
  const [favorites, useFavorites] = useLocalStorage<number[]>("favorites", []);
  const toggleFavorites = (id: number) => {
    if (favorites.includes(id)) {
      favorites.filter((filmId) => filmId !== id);
    }
  };
};
