import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  textAlign: "center",
  color: "white",
});

export const swiper = style({
  width: "100%",
  height: "100%",
});

export const swiperSlide = style({
  background: "none",
  backgroundPosition: "center",
  backgroundSize: "cover",
  transition: "transform .3s",
  ":hover": {
    cursor: "pointer",
  },
});

export const img = style({
  display: "block",
  height: "500px",
});
