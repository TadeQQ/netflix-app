import React from "react";
import { useGetVideo } from "../../../hooks/useGetVideo";
import { useRouter } from "next/router";
import { flex, bolder, padding } from "./VideoInfo.css";
export const VideoInfo = () => {
  const router = useRouter();
  const filmId = router.query.filmId as string;
  const video = useGetVideo({ id: Number(filmId) });
  return (
    <div>
      <div className="card">
        <h2>{video?.title}</h2>
        <div className="infomartion">
          <div className={flex}>
            <div className={bolder}>Realised in:</div>
            <div className={padding}> {video?.year}</div>
          </div>
          <div className={flex}>
            <div className={bolder}>Director:</div>
            <div className={padding}> {video?.director}</div>
          </div>
          <div className={flex}>
            <div className={bolder}>Starring: </div>
            <div className={padding}> {video?.actors}</div>
          </div>
        </div>

        <div className="plot">
          <p>{video?.plot}</p>
        </div>
      </div>
    </div>
  );
};

//stylowanie calej karty filmowej,
