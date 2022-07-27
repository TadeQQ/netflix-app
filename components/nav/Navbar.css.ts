import { style } from "@vanilla-extract/css";
import { theme } from "../../theme/theme.css";
export const root = style({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: theme.colors.black,
});

export const search = style({
  paddingTop: "20px",
  paddingRight: "20px",
});

export const icon = style({
  fontSize: "17px",
  color: "white",
});
