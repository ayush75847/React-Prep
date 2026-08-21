import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-orange-50">
        {/* Decorative background */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-100 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          {/* Content */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              ✦ Welcome to our platform
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
              Build.
              <span className="text-orange-500"> Explore.</span>
              <br />
              Create.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              A modern React experience designed with clean navigation, reusable
              components and a beautiful user interface.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about"
                className="rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Explore More
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-400 hover:text-orange-600"
              >
                Contact Us
              </Link>
            </div>

            {/* Small stats */}
            <div className="mt-10 flex items-center gap-8 border-t border-orange-200 pt-6">
              <div>
                <p className="text-2xl font-bold text-gray-950">100%</p>
                <p className="text-sm text-gray-500">Responsive</p>
              </div>

              <div className="h-10 w-px bg-orange-200" />

              <div>
                <p className="text-2xl font-bold text-gray-950">Fast</p>
                <p className="text-sm text-gray-500">Navigation</p>
              </div>

              <div className="h-10 w-px bg-orange-200" />

              <div>
                <p className="text-2xl font-bold text-gray-950">React</p>
                <p className="text-sm text-gray-500">Powered</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute h-80 w-80 rounded-full bg-orange-300/40 blur-3xl" />

            <div className="relative rounded-3xl border border-white bg-white/70 p-6 shadow-2xl backdrop-blur-sm">
              <img
                src="https://imgs.search.brave.com/3l0J3droEaKgCnYG1qaVUKegLe_YPQbgtDJnxCFcGPk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/ODUzLzM5OC9zbWFs/bC9oYW5kcy1nZW50/bHktaG9sZGluZy1h/LWdsb3dpbmctYmx1/ZS1hdG9tLW1vZGVs/LXN5bWJvbGl6aW5n/LXNjaWVuY2UtdGVj/aG5vbG9neS1hbmQt/aW5ub3ZhdGlvbi1p/bi1hLWZ1dHVyaXN0/aWMtZGlnaXRhbC1j/b25jZXB0LWJhY2tn/cm91bmQtcGhvdG8u/anBn"
                alt="Remote workspace illustration"
                className="w-full max-w-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-orange-500">
              Why choose us
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              Everything you need in one place
            </h2>

            <p className="mt-4 text-gray-600">
              Simple, powerful and designed to make your experience better.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl transition-colors group-hover:bg-orange-500">
                ⚡
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Fast & Simple
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Navigate through the application quickly with a clean and
                intuitive interface.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl transition-colors group-hover:bg-orange-500">
                🚀
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">
                Built for Growth
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                A scalable structure makes it easy to add new pages and
                functionality.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl transition-colors group-hover:bg-orange-500">
                🔒
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-950">Reliable</h3>

              <p className="mt-3 leading-7 text-gray-600">
                Built using modern React patterns for a smooth and dependable
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SHOWCASE ================= */}
      <section className="overflow-hidden bg-orange-50 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          {/* Image */}
          <div className="relative flex justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-orange-300/30 blur-3xl" />

            <div className="relative rounded-3xl bg-white p-8 shadow-xl">
              <img
                src="https://imgs.search.brave.com/3l0J3droEaKgCnYG1qaVUKegLe_YPQbgtDJnxCFcGPk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/ODUzLzM5OC9zbWFs/bC9oYW5kcy1nZW50/bHktaG9sZGluZy1h/LWdsb3dpbmctYmx1/ZS1hdG9tLW1vZGVs/LXN5bWJvbGl6aW5n/LXNjaWVuY2UtdGVj/aG5vbG9neS1hbmQt/aW5ub3ZhdGlvbi1p/bi1hLWZ1dHVyaXN0/aWMtZGlnaXRhbC1j/b25jZXB0LWJhY2tn/cm91bmQtcGhvdG8u/anBn"
                alt="Remote work illustration"
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-semibold uppercase tracking-widest text-orange-500">
              Work smarter
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
              A better experience starts with better design.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Explore different sections of the application and experience how
              React Router makes navigation feel seamless.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-gray-950">
                    Smooth navigation
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Move between pages without unnecessary reloads.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-gray-950">
                    Reusable components
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Build interfaces from maintainable React components.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                  ✓
                </div>

                <div>
                  <h3 className="font-semibold text-gray-950">
                    Responsive design
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Enjoy the experience across different screen sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-950 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-3xl">✦</span>

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-5xl">
            Ready to explore?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
            Discover the rest of the application and see what we've built with
            React.
          </p>

          <Link
            to="/about"
            className="mt-8 inline-flex rounded-xl bg-orange-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:-translate-y-1 hover:bg-orange-600"
          >
            Get Started →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
