import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { LogoutBtn, Container } from "../index";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Sign up",
      slug: "/signup",
      active: !authStatus,
    },
  ];
  return (
    <>
      <header>
        <Container>
          <nav>
            <div>
              <NavLink to={<Home />}>Inkly</NavLink>
            </div>
            <ul>
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button onClick={() => navigate(item.slug)}>
                      {item.name}
                    </button>
                  </li>
                ) : null,
              )}
            </ul>
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Header;
