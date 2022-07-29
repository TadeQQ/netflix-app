import React from "react";
import { useFetchGenres } from "../../../hooks/useFetchGenres";
import { Genres } from "../../../utils/api";
import { MediaElement } from "../mediaElement/MediaElement";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
interface GenresProps {
  genre: Genres;
}
export const GenresList = ({ genre }: GenresProps) => {
  const films = useFetchGenres({ genre });
  return (
    <div>
      <div className="categories">
        <h2>{genre}</h2>
        <Carousel>
          {films.map((film) => (
            <MediaElement key={film.id} film={film} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
