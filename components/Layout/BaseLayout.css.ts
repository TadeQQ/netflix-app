import { style } from "@vanilla-extract/css";
import { theme } from "../../theme/theme.css";

export const root = style({
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
  backgroundColor: theme.colors.black,
});

// MozBackground-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
