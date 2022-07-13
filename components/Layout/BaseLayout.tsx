import React from "react";
import { Navbar } from "../nav/Navbar";
interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
  <>
    {" "}
    <Navbar />
    <div>{children}</div>
  </>
);

export const getBaseLayout = (page: React.ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
