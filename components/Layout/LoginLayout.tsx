import React from "react";
import { Logo } from "../logo/Logo";
import { Footer } from "../foot/Footer";
import { body } from "./LoginLayout.css";
interface BaseLayoutProps {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: BaseLayoutProps) => (
  <>
    <header>
      <Logo />
    </header>
    <section>{children}</section>
    <Footer />
  </>
);

export const getLoginLayout = (page: React.ReactNode) => (
  <LoginLayout>{page}</LoginLayout>
);
