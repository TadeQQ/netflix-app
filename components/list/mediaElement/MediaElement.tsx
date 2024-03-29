import React from "react";
import { MediaList } from "../../../utils/api";
import { useFavorites } from "../../../hooks/useFavorites";
import test from "../../../public/unnamed.png";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "../../../routes/Routes";

interface MediaElementProps {
  film: MediaList;
}

export const MediaElement = ({ film }: MediaElementProps) => {
  const { favorites, toggleFavorites } = useFavorites();

  const isFav = favorites.includes(film.id);
  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1572700432881-42c60fe8c869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  };

  return (
    <div>
      <Link href={Routes.VIDEO_PLAYER(film.id)}>
        {/* <Image src={test} alt="test" width="200px" height="200px"></Image> */}
        <Image
          src={film.posterUrl || test}
          alt="poster"
          width="200px"
          height="200px"
          // onError={handleError}
          // onErrorCapture={}
        ></Image>
      </Link>
      <div>
        {film.title}{" "}
        <button
          onClick={() => toggleFavorites(film.id)}
          style={{ color: isFav ? "green" : "red" }}
        >
          {isFav ? "usun" : "dodaj"}
        </button>
      </div>
    </div>
  );
};
