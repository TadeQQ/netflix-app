import React, { useState, useEffect } from "react";
import { ResponseHandler } from "../types/ResponseHandler";
import { fetchVideoById, MediaList } from "../utils/api";

interface UseGetVideoProps extends ResponseHandler<MediaList> {
  id: number;
}

export const useGetVideo = ({ id, onError, onSuccess }: UseGetVideoProps) => {
  const [video, setVideo] = useState<MediaList>();

  const getVideo = async () => {
    try {
      const fetchedVideo = await fetchVideoById(id);
      setVideo(fetchedVideo);
      onSuccess?.(fetchedVideo);
      console.log("tu jest fetched video:" + fetchedVideo);
    } catch (err) {
      onError?.(err as Error);
    }
  };

  useEffect(() => {
    getVideo();
  }, [id]);
  return video;
};
