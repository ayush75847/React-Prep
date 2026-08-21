import React from "react";
import { useLoaderData, Link } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <main className="min-h-[650px] bg-orange-50 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            GitHub Profile
          </span>

          <h1 className="mt-5 text-4xl font-extrabold text-gray-950 sm:text-5xl">
            Developer Profile
          </h1>

          <p className="mt-3 text-gray-600">
            Live data fetched from the GitHub API using React Router's loader.
          </p>
        </div>

        {/* Profile Card */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">
          {/* Top section */}
          <div className="bg-gray-950 px-8 py-10 sm:px-12">
            <div className="flex flex-col items-center gap-6 sm:flex-row">
              {/* Avatar */}
              <img
                src={data.avatar_url}
                alt={`${data.login} avatar`}
                className="h-32 w-32 rounded-full border-4 border-orange-500 object-cover shadow-lg"
              />

              {/* Profile Info */}
              <div className="text-center sm:text-left">
                <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                  GitHub User
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {data.name || data.login}
                </h2>

                <p className="mt-1 text-gray-400">@{data.login}</p>

                {data.bio && (
                  <p className="mt-4 max-w-xl text-gray-300">{data.bio}</p>
                )}
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 divide-x border-b border-gray-200 sm:grid-cols-4">
            <div className="p-6 text-center">
              <p className="text-2xl font-bold text-gray-950">
                {data.followers}
              </p>
              <p className="mt-1 text-sm text-gray-500">Followers</p>
            </div>

            <div className="p-6 text-center">
              <p className="text-2xl font-bold text-gray-950">
                {data.following}
              </p>
              <p className="mt-1 text-sm text-gray-500">Following</p>
            </div>

            <div className="p-6 text-center">
              <p className="text-2xl font-bold text-gray-950">
                {data.public_repos}
              </p>
              <p className="mt-1 text-sm text-gray-500">Repositories</p>
            </div>

            <div className="p-6 text-center">
              <p className="text-2xl font-bold text-gray-950">
                {data.public_gists}
              </p>
              <p className="mt-1 text-sm text-gray-500">Gists</p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col items-center justify-between gap-4 px-8 py-6 sm:flex-row">
            <div className="text-sm text-gray-500">
              {data.location && <span>📍 {data.location}</span>}
            </div>

            <a
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              View GitHub Profile →
            </a>
          </div>
        </div>

        {/* Back */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="font-semibold text-gray-600 transition-colors hover:text-orange-500"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/ayush75847");

  return res.json();
};
