import { useState } from "react";
import useAuth from "./useAuth";
import { useLocation, useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const { dispatch, setAuth, isLogin } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const login = async (userDetails) => {
    setIsLoading(true);
    setError(false);

    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    });

    const json = await response.json();

    if (!response.ok) {
      isLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      localStorage.setItem("token", JSON.stringify(json.refresh_token));

      // update auth
      dispatch({ type: "LOGIN", payload: json.refresh_token });

      setIsLoading(false);
      setAuth(json)
      isLogin(true);
      navigate(from, { replace: true });
    }
  };

  return { login, isLoading, error };
};
