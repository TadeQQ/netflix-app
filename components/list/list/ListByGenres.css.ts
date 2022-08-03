import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "50px",
});

export const swiper = style({
  width: "100%",
  height: "100%",
});

export const swiperSlide = style({
  textAlign: "center",
  background: "black",
  display: "flex block",
  margin: "0",
  objectFit: "cover",
  position: "relative",
  transition: "transform .3s",
  borderRadius: "5px",
  ":hover": {
    cursor: "grab",
    transition: "transform .3s",
    msTransform: "scale(1.3)",
    WebkitTransform: "scale(1.3)",
    transform: "scale(1.3)",
  },
  ":active": {
    cursor: "grabbing",
  },
});
