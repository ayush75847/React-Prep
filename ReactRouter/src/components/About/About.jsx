import { Link } from "react-router-dom";

function About() {
  return (
    <main className="bg-white text-gray-900">
      {/* About Hero */}
      <section className="overflow-hidden bg-orange-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-orange-100 bg-white p-4 shadow-xl">
              <img
                src="https://imgs.search.brave.com/Zh9IOWND04vie-dx462WFx96EwlYAUqev2VDz6YU3Xs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS43ODI3/Mjg5ODYuMTkxMi9z/dCxzbWFsbCw1MDd4/NTA3LXBhZCw2MDB4/NjAwLGY4ZjhmOC51/Mi5qcGc"
                alt="React development"
                className="w-full max-w-lg rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              About us
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-950 sm:text-5xl">
              Building better experiences with
              <span className="text-orange-500"> React.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We believe great applications should be simple to use, easy to
              navigate and enjoyable to interact with.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              This project is built around modern React concepts, reusable
              components and client-side routing to create a smooth single-page
              application experience.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Get in touch →
            </Link>
          </div>
        </div>
      </section>

      {/* What We Focus On */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-semibold uppercase tracking-widest text-orange-500">
            Our approach
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
            Simple ideas. Better execution.
          </h2>

          <p className="mt-4 leading-7 text-gray-600">
            We focus on creating interfaces that are clean, responsive and easy
            to maintain.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
              ⚛️
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-950">
              Modern React
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Built using reusable components, hooks and modern React
              development patterns.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
              🧩
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-950">
              Clean Architecture
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              Components are structured to remain reusable, readable and easy to
              extend.
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-xl">
              🧭
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-950">
              Smooth Navigation
            </h3>

            <p className="mt-3 leading-7 text-gray-600">
              React Router provides seamless navigation between the different
              sections of the application.
            </p>
          </div>
        </div>
      </section>

      {/* Small CTA */}
      <section className="bg-gray-950 px-6 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Want to know more?
            </h2>

            <p className="mt-2 text-gray-400">
              Feel free to get in touch with us.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-orange-600"
          >
            Contact Us →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
