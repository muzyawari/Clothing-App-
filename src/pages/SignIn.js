import { Link } from "react-router-dom";

export default function SignIn() {
  return (
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
            <Link
              class="no-underline border-b border-blue text-blue"
              to="/sign-up"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
