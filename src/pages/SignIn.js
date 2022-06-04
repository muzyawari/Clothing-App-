import { useState } from "react";

import { Link } from "react-router-dom";

import PulseLoader from "react-spinners/PulseLoader";

import { logInWithEmailAndPassword } from "../firebase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState(false);
  const [load, setLoad] = useState(false);

  const handleSignUpForm = async (e) => {
    e.preventDefault();

    setLoad(true);

    const response = await logInWithEmailAndPassword(email, password);

    setEmail("");
    setPassword("");

    setLoad(false);
    setError(false);
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col mt-6">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <form
          className="bg-white px-6 py-8 rounded shadow-md shadow-slate-300	 text-gray-900 w-full"
          onSubmit={handleSignUpForm}
        >
          <h1 className="mb-8 text-3xl text-center">Sign In</h1>

          {error ? (
            <div
              id="alert-2"
              className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200"
              role="alert"
            >
              <svg
                className="flex-shrink-0 w-5 h-5 text-red-400 dark:text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="ml-3 text-sm font-medium text-red-400 dark:text-red-400">
                Incorrect username or password.
              </div>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-400 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300"
                data-dismiss-target="#alert-2"
                aria-label="Close"
                onClick={() => setError(false)}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          ) : (
            ""
          )}

          {message ? (
            <div
              className="flex p-4 mb-4 text-sm text-green-400 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
              role="alert"
            >
              <svg
                className="inline flex-shrink-0 mr-3 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div>
                <span className="font-medium">
                  You have successfully signed up.
                </span>
              </div>
            </div>
          ) : (
            ""
          )}

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-blue-500 focus:invalid:ring-pink-500"
            name="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-blue-500"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-gray-400 text-white my-1 active:bg-gray-700"
          >
            {load ? (
              <PulseLoader color="#DCDCDC" loading={load} size={8} />
            ) : (
              " Login"
            )}
          </button>

          <div className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link
              class="no-underline border-b border-blue text-blue"
              to="/sign-up"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

<div class="bg-grey-lighter min-h-screen flex flex-col ">
  <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div class="bg-white px-6 py-8 rounded shadow-md shadow-slate-300	 text-gray-900 w-full">
      <h1 class="mb-8 text-3xl text-center">Sign In</h1>

      <input
        type="text"
        class="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-blue-500"
        name="email"
        placeholder="Email"
      />

      <input
        type="password"
        class="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-blue-500"
        name="password"
        placeholder="Password"
      />

      <button
        type="submit"
        class="w-full text-center py-3 rounded bg-gray-400 text-white my-1"
      >
        Login
      </button>

      <div class="text-center text-sm text-gray-500 mt-6">
        Don't have an account?{" "}
        <Link class="no-underline border-b border-blue text-blue" to="/sign-up">
          Sign up
        </Link>
      </div>
    </div>
  </div>
</div>;
