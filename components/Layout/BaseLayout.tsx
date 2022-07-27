import React from "react";
import { root } from "./BaseLayout.css";
import { Navbar } from "../nav/Navbar";
import { Footer } from "../foot/Footer";
interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
  <>
    <Navbar />
    <div>{children}</div>
    <Footer />
  </>
);

export const getBaseLayout = (page: React.ReactNode) => (
  <BaseLayout>{page}</BaseLayout>
);
