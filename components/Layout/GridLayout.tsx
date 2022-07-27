import React from "react";
import { root } from "./GridLayout.css";

export const GridLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={root}>{children}</div>;
};
