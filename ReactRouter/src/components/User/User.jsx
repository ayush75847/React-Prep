import React from "react";
import { useParams, Link } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <main className="min-h-[600px] bg-orange-50 px-6 py-20">
      <div className="mx-auto flex max-w-3xl justify-center">
        <div className="w-full rounded-3xl border border-orange-100 bg-white p-10 text-center shadow-xl sm:p-14">
          {/* Avatar */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-orange-100 text-3xl font-bold text-orange-500">
            
          </div>

          <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-orange-500">
            User Profile
          </p>

          <h1 className="mt-3 text-4xl font-extrabold text-gray-950">
            User : {id}
          </h1>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-600">
            You are currently viewing the profile associated with this dynamic
            route parameter.
          </p>

          {/* Route information */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl bg-gray-950 p-5 text-left">
            <p className="text-sm text-gray-500">Current route</p>

            <p className="mt-1 font-mono text-orange-400">/user/{id}</p>
          </div>

          <Link
            to="/"
            className="mt-8 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default User;
