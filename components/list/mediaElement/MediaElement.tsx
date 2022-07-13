import React from "react";
import { MediaList } from "../../../utils/api";
import { useFavorites } from "../../../hooks/useFavorites";
import test from "../../../public/ben-redblock-loading.gif";
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
        <Image
          src={film.posterUrl || test}
          alt={film.title}
          width="230px"
          height="200px"
        ></Image>
      </Link>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => toggleFavorites(film.id)}
          style={{
            color: isFav ? "green" : "red",
            fontSize: "20px",
            backgroundColor: "black",
            border: "none",
          }}
        >
          {isFav ? "★" : "☆"}
        </button>
      </div>
    </div>
  );
};
