import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../../theme/theme.css";

export const root = style({
  position: "relative",
  textAlign: "center",
  color: "white",
});

const base = style({
  position: "absolute",
  left: 0,
  color: "white",
  fontSize: theme.fontSizes.h1,
  backgroundColor: "transparent",
  border: "none",
});

export const variants = styleVariants({
  base: [base],
  fav: [base, { color: "rgb(233,39,37)" }],
});
