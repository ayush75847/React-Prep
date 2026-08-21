import React from "react";

function Contact() {
  return (
    <main className="bg-white text-gray-900">
      {/* Header */}
      <section className="bg-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <span className="inline-flex rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            Contact us
          </span>

          <h1 className="mt-5 text-4xl font-extrabold text-gray-950 sm:text-5xl">
            Let's start a conversation.
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question, suggestion, or just want to say hello? We'd love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl md:grid-cols-2">
          {/* Contact Information */}
          <div className="bg-gray-950 p-8 text-white sm:p-10">
            <p className="font-semibold uppercase tracking-widest text-orange-500">
              Get in touch
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              We'd love to hear from you.
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Whether you have a question about the project or simply want to
              connect, feel free to reach out.
            </p>

            <div className="mt-10 space-y-7">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="mt-1 font-medium text-gray-200">
                    Acme Inc, Street, State,
                    <br />
                    Postal Code
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="mt-1 font-medium text-gray-200">
                    +44 1234567890
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="mt-1 font-medium text-gray-200">
                    info@acme.org
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="flex flex-col justify-center p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-950">
              Send us a message
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form below and we'll get back to you.
            </p>

            {/* Name */}
            <div className="mt-7">
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>

              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
              />
            </div>

            {/* Email */}
            <div className="mt-5">
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
              />
            </div>

            {/* Phone */}
            <div className="mt-5">
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="+91"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
              />
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Message
              </label>

              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder="How can we help you?"
                className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Send Message →
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
