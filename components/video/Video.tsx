import React, { useRef, useEffect } from "react";
import { useGetVideo } from "../../hooks/useGetVideo";
import { useRouter } from "next/router";
import videojs, { VideoJsPlayerOptions, VideoJsPlayer } from "video.js";
import "video.js/dist/video-js.css";

export const Video = () => {
  const router = useRouter();
  const filmId = router.query.filmId as string;
  const video = useGetVideo({ id: Number(filmId) });
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  // const {} = useVideoJs({ videoRef, options: {} });

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    // if (!playerRef.current) {
    //   const videoElement = videoRef.current;

    //   if (!videoElement) return;
    if (video) {
      const player = (playerRef.current = videojs(
        videoRef.current as Element,
        {
          autoplay: false,
          controls: true,
          responsive: true,
          fluid: true,
          poster: video?.posterUrl,
          sources: [
            {
              src: String(video?.url),
            },
          ],
        },
        () => {
          videojs.log("player is ready");
          // onReady && onReady(player);
        }
      ));
    }

    // You could update an existing player in the `else` block here
    // on prop change, for example:
    // } else {
    // const player = playerRef.current;
    // player.autoplay(options.autoplay);
    // player.src(options.sources);
  }, [video]);

  // Dispose the Video.js player when the functional component unmounts
  // useEffect(() => {
  //   const player = playerRef.current;

  //   return () => {
  //     if (player) {
  //       player.dispose();
  //       playerRef.current = null;
  //     }
  //   };
  // }, [playerRef]);

  return (
    <>
      <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-big-play-centered">
          {/* <source src={String(video?.url)} type="video/mp4" /> */}
        </video>
      </div>
      <button onClick={() => playerRef.current?.pause()}>asd</button>
    </>
  );
};
