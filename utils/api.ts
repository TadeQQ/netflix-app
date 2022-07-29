import data from "./data.json";

export interface MediaList {
  id: number;
  title: string;
  year: string;
  runtime: string;
  genres: string[];
  director: string;
  actors: string;
  plot: string;
  url?: string;
  posterUrl?: string;
}

const mediaList = data as MediaList[];
const errorPossibility = 0; //zmienilem na 0 bo wywala ciagle bledy
const maxRequestTimeout = 4;

export function fetchMediaList(
  limit: number,
  page: number
): Promise<MediaList[]> {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorPossibility) {
      reject(new Error("Network error"));
    }
    if (page > Math.floor(mediaList.length / limit)) {
      reject(new Error("Fetched all films"));
    }

    setTimeout(() => {
      resolve(mediaList.slice(limit * (page - 1), limit * page));
    }, Math.floor(Math.random() * maxRequestTimeout) * 1000);
  });
}

export function searchMedia(query: string): Promise<MediaList[]> {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorPossibility) {
      reject(new Error("Network error"));
    }
    setTimeout(() => {
      resolve(
        mediaList.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }, Math.floor(Math.random() * maxRequestTimeout) * 1000);
  });
}

export function fetchVideoById(id: number): Promise<MediaList> {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorPossibility) {
      reject(new Error("Network error"));
    }
    setTimeout(() => {
      resolve(mediaList.filter((item) => item.id === Number(id))[0]);
    }, Math.floor(Math.random() * maxRequestTimeout) * 1000);
  });
}

// type Genres = "Action" | "asd"

export enum Genres {
  ACTION = "Action",
  MUSIC = "Music",
}

export function fetchGenres(genre: Genres): Promise<MediaList[]> {
  return new Promise((resolve, reject) => {
    if (Math.random() < errorPossibility) {
      reject(new Error("Network error"));
    }
    setTimeout(() => {
      resolve(mediaList.filter((item) => item.genres.includes(genre)));
    }, Math.floor(Math.random() * maxRequestTimeout) * 1000);
  });
}
