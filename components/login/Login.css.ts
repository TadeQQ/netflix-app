import zIndex from "@mui/material/styles/zIndex";
import { style } from "@vanilla-extract/css";

export const body = style({
  backgroundImage: "url(/background.jpg)",
  height: "100%",
  width: "100%",
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingBottom: "10px",
});

export const form = style({
  position: "relative",
  zIndex: 1,
  backgroundColor: "rgba(0,0,0,0.5)",
  backdropFilter: "blur(8px)",
  maxWidth: "360px",
  margin: "15% auto 20%",
  padding: "45px",
  textAlign: "center",
  boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)",
});

export const formInput = style({
  outline: 0,
  background: "#f2f2f2",
  width: "100%",
  border: 0,
  margin: "0 0 15px",
  padding: "15px",
  boxSizing: "border-box",
  fontSize: "14px",
});

export const formButton = style({
  textTransform: "uppercase",
  outline: 0,
  backgroundColor: "rgb(233,39,37)",
  width: "100%",
  border: 1,
  borderRadius: "5px",
  padding: "15px",
  color: "#FFFFFF",
  fontSize: "14px",
  WebkitTransition: "all 0.3 ease",
  transition: "all 0.3 ease",
  cursor: "pointer",
});
