import { Link, NavLink } from "react-router-dom";

function Footer() {
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? "text-orange-500" : "text-gray-400 hover:text-orange-400"
    }`;

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="mx-auto w-full max-w-screen-xl px-6 py-10 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className="h-14 w-auto"
                alt="Logo"
              />
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Build. Explore. Create. A modern React application built with a
              clean and simple experience.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-orange-500">
              Resources
            </h2>

            <ul className="space-y-3 text-sm">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>

              <li>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink to="/github" className={navLinkClass}>
                  Github
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-orange-500">
              Connect
            </h2>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/ayush75847"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 transition-colors duration-200 hover:text-orange-400"
                >
                  Github
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors duration-200 hover:text-orange-400"
                >
                  Discord
                </a>
              </li>

              <li>
                <a
                  href="https://ayushrawat.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 transition-colors duration-200 hover:text-orange-400"
                >
                  Personal Website
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-orange-500">
              Legal
            </h2>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-gray-400 transition-colors duration-200 hover:text-orange-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  to="#"
                  className="text-gray-400 transition-colors duration-200 hover:text-orange-400"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            © 2026{" "}
            <a
              href="https://ayushrawat.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-gray-400 transition-colors duration-200 hover:text-orange-400"
            >
              ayushrawat
            </a>
            . All Rights Reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-500 transition-colors duration-200 hover:text-orange-500"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 8 19">
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Discord */}
            <a
              href="#"
              aria-label="Discord"
              className="text-gray-500 transition-colors duration-200 hover:text-orange-500"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 21 16">
                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
              </svg>
            </a>

            {/* Twitter */}
            <a
              href="#"
              aria-label="Twitter"
              className="text-gray-500 transition-colors duration-200 hover:text-orange-500"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 17">
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ayush75847"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-500 transition-colors duration-200 hover:text-orange-500"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
