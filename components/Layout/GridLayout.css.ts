import { style } from "@vanilla-extract/css";
import { theme } from "../../theme/theme.css";
export const root = style({
  display: "grid",
  gridTemplateColumns: "repeat(5,1fr)",
  gridGap: "30px",
  backgroundColor: theme.colors.black,
  "@media": {
    "screen and (max-width: 1600px)": {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
    "screen and (max-width: 1200px)": {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    "screen and (max-width: 900px)": {
      gridTemplateColumns: "1fr 1fr ",
    },
  },
});
