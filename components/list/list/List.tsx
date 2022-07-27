import React from "react";
import { useFetchMedia } from "../../../hooks/useFetchMedia";
import { MediaElement } from "../mediaElement/MediaElement";
import { root, card } from "./List.css";
import { GridLayout } from "../../Layout/GridLayout";
import { GenresList } from "./GenresList";
export const List = () => {
  const { films, loadMore } = useFetchMedia({
    onError: () => {},
  });
  return (
    <div className={root}>
      {/* <GridLayout>
        {films.map((film) => (
          <MediaElement key={film.id} film={film} />
        ))}
      </GridLayout> */}
      {films.map((film) => (
        <GenresList key={film.id} film={film} />
      ))}
      <button onClick={loadMore}>load 10 more </button>
    </div>
  );
};
