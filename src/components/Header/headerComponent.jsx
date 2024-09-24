import React, { useRef } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import { NavLink, Link } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => {
    return menuRef.current.classList.toggle("show-menu");
  };

  return (
    <header>
      <Container>
        <div className="nav_wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          <div className="navigation" ref={menuRef}>
            <div className="menu d-flex align-items-center gap-5">
              {navLinks.map((item, index) => (
                <NavLink
                  onClick={toggleMenu}
                  to={item.path}
                  key={index}
                  className={({ isActive }) =>
                    isActive ? "active-menu" : "inactive"
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="nav-right d-flex align-items-center gap-4">
            <span className="cart-icon">
              <i class="ri-shopping-cart-line"></i>
              <span className="cart-badge">2</span>
            </span>

            <span className="user">
              <Link to="/login">
                <i class="ri-user-line"></i>
              </Link>
            </span>

            <span className="mobile-menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
