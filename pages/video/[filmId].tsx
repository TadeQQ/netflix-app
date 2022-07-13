import React from "react";
import { Video } from "../../components/video/Video";
import { getBaseLayout } from "../../components/Layout/BaseLayout";
import { VideoInfo } from "../../components/video/VideoInfo/VideoInfo";
const FilmPage = () => {
  return (
    <div>
      <VideoInfo />
      <Video />
    </div>
  );
};

FilmPage.getLayout = getBaseLayout;
export default FilmPage;
