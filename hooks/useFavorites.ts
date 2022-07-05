import useLocalStorage from "./useLocalStorage";

export const useFavorites = () => {
  const [favorites, setFavorites] = useLocalStorage<number[]>("favorites", []);

  const toggleFavorites = (id: number) => {
    if (favorites.includes(id)) {
      setFavorites((prev) => prev.filter((filmId) => filmId !== id));
    } else {
      setFavorites((prev) => (prev ? [...prev, id] : [id]));
    }
  };

  return { favorites, toggleFavorites };
};
