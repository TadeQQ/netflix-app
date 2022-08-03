import React from "react";
import { useFetchGenres } from "../../../hooks/useFetchGenres";
import { Genres } from "../../../utils/api";
import { MediaElement } from "../mediaElement/MediaElement";
import { Swiper, SwiperSlide } from "swiper/react";
import { swiper, swiperSlide } from "./ListByGenres.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";

interface GenresProps {
  genre: Genres;
}
export const ListByGenres = ({ genre }: GenresProps) => {
  const films = useFetchGenres({ genre });
  return (
    <div className="categories">
      <h2>{genre}</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={100}
        centeredSlides={false}
        navigation={true}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        className={swiper}
      >
        {films.map((film) => (
          <SwiperSlide key="dupa" className={swiperSlide}>
            <MediaElement key={film.id} film={film} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
