import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-1/4 h-60 mx-auto mt-40"
    >
      <h1 className="text-lg text-white text-center">Authorization</h1>
      {/* <label className="text-xs text-gray-400">
        Username:
        <input
          type="text"
          placeholder="Username"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label> */}
      <label className="text-xs text-gray-400">
        E-Mail:
        <input
          type="text"
          placeholder="E-Mail"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <label className="text-xs text-gray-400">
        Password:
        <input
          type="password"
          placeholder="Password"
          className="mt-1 text-black w-full rounded-lg bg-gray-400 border py-1 px-2 text-xs outline-none placeholder:text-gray-700"
        />
      </label>
      <div className="flex gap-8 justify-center mt-4">
        <button
          type="submit"
          // onClick={handleSubmit}
          className="flex justify-center items-center text-xs text-white rounded-sm py-2 px-4"
        >
          Signin
        </button>
        <Link
          to="/register"
          className="flex justify-center items-center text-xs text-white"
        >
          Don't have an account ?
        </Link>
      </div>
    </form>
  );
};
