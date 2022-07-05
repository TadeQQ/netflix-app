import React from "react";
import { useFetchMedia } from "../../../hooks/useFetchMedia";
import { MediaElement } from "../mediaElement/MediaElement";
import { root } from "./List.css";
export const List = () => {
  const { films, loadMore } = useFetchMedia({
    onError: () => {},
  });
  return (
    <div className={root}>
      {films.map((film, i) => (
        <MediaElement key={film.id} film={film} />
      ))}
      <button onClick={loadMore}>load 10 more </button>
    </div>
  );
};
