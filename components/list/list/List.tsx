import React from "react";
import { useFetchMedia } from "../../../hooks/useFetchMedia";
import { MediaElement } from "../mediaElement/MediaElement";
import { root } from "./ListByGenres.css";
import { GridLayout } from "../../Layout/GridLayout";
export const List = () => {
  const { films, loadMore } = useFetchMedia({
    onError: () => {},
  });
  return (
    <div className={root}>
      <GridLayout>
        {films.map((film) => (
          <MediaElement key={film.id} film={film} />
        ))}
      </GridLayout>

      <button onClick={loadMore}>load 10 more </button>
    </div>
  );
};
