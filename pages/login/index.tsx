import React from "react";
import { getLoginLayout } from "../../components/Layout/LoginLayout";
import { Login } from "../../components/login/Login";
const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

LoginPage.getLayout = getLoginLayout;
export default LoginPage;
