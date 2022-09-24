import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX = /^[a-zA-Z0-9f]{3,30}$/;
const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function SignUp() {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);

  // email
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [matchEmail, setMatchEmail] = useState("");
  const [validMatchEmail, setValidMatchEmail] = useState(false);

  // password
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);

  const [matchPassword, setMatchPassword] = useState("");
  const [validMatchPassword, setValidMatchPassword] = useState(false);

  // error
  const [errMsg, setErrorMsg] = useState("");
  // const [success, setSuccess] = useState("");

  // context
  const { signup, error, isLoading} = useSignup();

  // user
  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  // email
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
    const match = email === matchEmail;
    setValidMatchEmail(match);
  }, [email, matchEmail]);

  // password
  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatchPassword(password === matchPassword);
  }, [password, matchPassword]);

  useEffect(() => {
    setErrorMsg("");
  }, [user, password, matchPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const v1 = USER_REGEX.test(user);
    const v2 = EMAIL_REGEX.test(email);
    const v3 = PASSWORD_REGEX.test(password);

    if (!v1 || !v2 || !v3) {
      setErrorMsg("Invalid Entry");
      return;
    }

    const name = user;
    const userDetails = {
      name,
      email,
      password,
    };

    try {
      await signup(userDetails);
    } catch (error) {
      if (error?.response) {
        setErrorMsg("No server Response");
      } else if (error.response?.status === 409) {
        setErrorMsg("Username Taken");
      } else {
        setErrorMsg("Registration failed");
      }
    }
  };

  return (
    <div>
      {isLoading ? (
        <section>
          <h1>Success !</h1>
        </section>
      ) : (
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="fullname"
                  placeholder="Full Name"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  required
                  aria-invalid={validName ? "false" : "true"}
                />

                <p
                  className={
                    user && !validName ? "border border-red-700" : "hidden"
                  }
                >
                  Your Username in not valid
                </p>

                <input
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  aria-invalid={validEmail ? "false" : "true"}
                />

                <p
                  className={
                    email && !validEmail ? "border border-red-700" : "hidden"
                  }
                >
                  Your email in not valid
                </p>

                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  aria-invalid={validPassword ? "false" : "true"}
                />

                <p
                  className={
                    password && !validPassword
                      ? "border border-red-700"
                      : "hidden"
                  }
                >
                  Your password in not valid
                </p>

                <button
                  type="submit"
                  className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1"
                  disabled={isLoading}
                >
                  Create Account
                </button>
              </form>

              <div className="text-center text-sm text-grey-dark mt-4">
                By signing up, you agree to the
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Terms of Service
                </a>
                and
                <a
                  className="no-underline border-b border-grey-dark text-grey-dark"
                  href="#"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="text-grey-dark mt-6">
              Already have an account?
              <button className="no-underline border-b hover:border-blue-500 text-blue">
                Log in
              </button>
              .
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
