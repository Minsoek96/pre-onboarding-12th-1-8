import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Auth = ({ children }) => {
  const navigation = useNavigate();
  const { pathname } = useLocation();

  // 추후 로그인, 회원가입 로직이 완성되면 주석 해제 예정
  useEffect(() => {
    switch (pathname) {
      case "/signin":
      case "/signup":
      // if (window.localStorage.getItem("accessToken")) {
      //   navigation("/todo");
      //   break;
      // }
      // break;
      case "/todo":
      // if (!window.localStorage.getItem("accessToken")) {
      //   navigation("/signin");
      //   break;
      // }
      // break;
      default:
        break;
    }
  }, []);
  return <>{children}</>;
};
