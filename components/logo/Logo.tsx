import Image from "next/image";
import React from "react";
import logo from "../../public/logo.jpeg";
export const Logo = () => {
  return <Image alt="logo" src={logo} width="200px" height="90px" />;
};
