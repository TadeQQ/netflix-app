import { MediaList } from "./api";

export const sort = (tab: MediaList[]) => {
  return tab.sort((a, b) => a.title.localeCompare(b.title));
};
