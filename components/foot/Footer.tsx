import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { footer } from "./Footer.css";

export const Footer = () => {
  return (
    <footer className={footer}>
      <FaRegCopyright />
      &nbsp; TadeQ. All rights reserved.
    </footer>
  );
};
