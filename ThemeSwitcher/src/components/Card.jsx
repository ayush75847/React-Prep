import React from "react";

function Card() {
  return (
    <div className="w-full max-w-md rounded-2xl bg-white dark:bg-black p-8 shadow-2xl border border-gray-200 dark:border-orange-500/30">
      <div className="mb-6">
        <span className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          Theme Demo
        </span>

        <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
          React Theme Card
        </h2>

        <p className="mt-3 text-gray-600 dark:text-gray-400">
          This card automatically adapts when you switch between light and dark
          themes.
        </p>
      </div>

      <button className="w-full rounded-xl bg-orange-500 px-5 py-3 font-semibold text-black transition-all duration-200 hover:bg-orange-400 active:scale-95">
        Learn More
      </button>
    </div>
  );
}

export default Card;
