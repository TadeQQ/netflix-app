import { NextPage } from "next";
import React from "react";
import { Video } from "../../components/video/Video";
import { MediaList } from "../../utils/api";

const FilmPage: NextPage = () => {
  return (
    <div>
      <Video />
    </div>
  );
};

export default FilmPage;
