import { Fragment } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginStatus = useSelector((state: any) => {
    return state.login.auth;
  });
  useEffect(() => {
    if (!loginStatus) {
      setIsLoggedIn(false);
      return navigate("/adminpanel/login");
    }
    setIsLoggedIn(true);
  }, [loginStatus]);

  return <Fragment>{isLoggedIn ? <Outlet /> : null}</Fragment>;
};

export default ProtectedRoute;
