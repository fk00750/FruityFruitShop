import { useState } from "react";
import useAuth from "./useAuth";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [success, setSuccess] = useState(false)

  const { dispatch } = useAuth();

  const signup = async (userDetails) => {
    setIsLoading(true);
    setError(false);


    const response = await fetch("https://fruit-shop-api-22.herokuapp.com/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userDetails),
    });

    const json = await response.json();

    if (!response.ok) {
      isLoading(false);
      setError(json.error);
      setSuccess(true)
    }

    if (response.ok) {
      localStorage.setItem("token", JSON.stringify(json.refresh_token));

      // update auth
      dispatch({ type: "LOGIN", payload: json.refresh_token });

      isLoading(false);
    }
  };

  return { signup, isLoading, error,success };
};
