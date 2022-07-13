import React from "react";
import { useGetVideo } from "../../../hooks/useGetVideo";
import { useRouter } from "next/router";

export const VideoInfo = () => {
  const router = useRouter();
  const filmId = router.query.filmId as string;
  const video = useGetVideo({ id: Number(filmId) });
  return (
    <div>
      <div className="card">
        <h2>{video?.title}</h2>
        <div className="infomartion">
          <div>Realised in: {video?.year}</div>
          <div>Director: {video?.director}</div>
          <div>Starring: {video?.actors}</div>
        </div>

        <div className="plot">{video?.plot}</div>
      </div>
    </div>
  );
};

//stylowanie calej karty filmowej,
