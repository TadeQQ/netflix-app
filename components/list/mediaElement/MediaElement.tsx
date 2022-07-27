import React, { useState } from "react";
import { MediaList } from "../../../utils/api";
import { useFavorites } from "../../../hooks/useFavorites";
import test from "../../../public/unnamed.png";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "../../../routes/Routes";
import { variants, root, styling } from "./MediaElement.css";
interface MediaElementProps {
  film: MediaList;
}

export const MediaElement = ({ film }: MediaElementProps) => {
  const { favorites, toggleFavorites } = useFavorites();
  const isFav = favorites.includes(film.id);
  const [src, setSrc] = useState(film.posterUrl);
  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setSrc(
      "https://hubertkajdan.com/wp-content/uploads/2019/06/2019-06-20-Jezioro-Lednickie-010-Pano-1024x663.jpg"
    );
  };

  return (
    <div className={root}>
      <Link href={Routes.VIDEO_PLAYER(film.id)}>
        <Image
          src={src || test}
          alt={film.title}
          width={250}
          height={400}
          layout="fixed"
          onError={handleError}
          placeholder="blur"
          blurDataURL={`${test}`}
        ></Image>
      </Link>
      <button
        onClick={() => toggleFavorites(film.id)}
        className={isFav ? variants.fav : variants.base}
      >
        {isFav ? "★" : "☆"}
      </button>
    </div>
  );
};
