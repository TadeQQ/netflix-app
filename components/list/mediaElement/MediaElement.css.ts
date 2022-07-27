import { style, styleVariants } from "@vanilla-extract/css";
import { theme } from "../../../theme/theme.css";

export const root = style({
  position: "relative",
  transition: "transform .3s",
  ":hover": {
    transition: "transform .3s",
    msTransform: "scale(1.3)",
    WebkitTransform: "scale(1.3)",
    transform: "scale(1.3)",
  },

  borderRadius: "5px",
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

export const styling = style({
  transition: "transform .3s",
  ":hover": {
    transition: "transform .3s",
    msTransform: "scale(1.4)",
    WebkitTransform: "scale(1.4)",
    transform: "scale(1.4)",
  },
  borderRadius: "2px",
});
