import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Auth = ({ children }) => {
  const navigation = useNavigate();
  const { pathname } = useLocation();
  const [isCompletedAuthProcess, setIsCompletedAuthProcess] = useState(false);

  useEffect(() => {
    switch (pathname) {
      case "/signin":
      case "/signup":
        if (window.localStorage.getItem("access_token")) {
          navigation("/todo");
          break;
        }
        break;
      case "/todo":
        if (!window.localStorage.getItem("access_token")) {
          navigation("/signin");
          break;
        }
        break;
      default:
        break;
    }
    setIsCompletedAuthProcess(true);
  }, []);

  if (!isCompletedAuthProcess) return <></>;
  return <>{children}</>;
};
