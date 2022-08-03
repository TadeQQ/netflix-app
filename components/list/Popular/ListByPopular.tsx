import React from "react";
import { useFetchGenres } from "../../../hooks/useFetchGenres";
import { Genres } from "../../../utils/api";
import { MediaElement } from "../mediaElement/MediaElement";
import { Swiper, SwiperSlide } from "swiper/react";
import { root, swiper, swiperSlide, img } from "./ListByPopular.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation, EffectFade } from "swiper";

interface GenresProps {
  genre: Genres.POPULAR;
}
export const ListByPopular = ({ genre }: GenresProps) => {
  const films = useFetchGenres({ genre });
  return (
    <div>
      <h2>{genre}</h2>
      <div className={root}>
        <Swiper
          spaceBetween={100}
          effect={"fade"}
          loop={true}
          autoplay={true}
          modules={[Pagination, Autoplay, Navigation, EffectFade]}
          className={swiper}
        >
          {films.map((film) => (
            <SwiperSlide key="dupa" className={swiperSlide}>
              <MediaElement key={film.id} film={film} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
