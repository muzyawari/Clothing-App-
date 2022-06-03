import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUpForm = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col mt-6">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md shadow-slate-300	 text-gray-900 w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-blue-500 "
            name="fullname"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-blue-500"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-blue-500"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:border-blue-500"
            name="confirm_password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded bg-gray-400 text-white my-1"
            onClick={handleSignUpForm}
          >
            Create Account
          </button>

          <div className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link
              className="no-underline border-b border-blue text-blue"
              to="/sign-in"
            >
              Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
