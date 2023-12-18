"use client";

import "./Navbar.css";
import { useState } from "react";
import Link from "next/link";
import Logo from "../svg/Logo";

export default () => {
  const [open, isOpen] = useState(false);
  return (
    <div
      className="header-wrapper w-nav"
      data-w-id="9b01b8db-8988-0b69-ea7c-bf010248db31"
      data-collapse="medium"
    >
      <div className="container-default header w-container">
        <div className="header-content-wrapper">
          <Link
            href="/"
            className="header-logo-link w-nav-brand w--current"
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              color: "inherit",
            }}
          >
            <Logo />
          </Link>
          <div className="header-middle">
            <nav className="header-nav-menu-wrapper w-nav-menu">
              <ul className="header-nav-menu-list">
                <li className="header-nav-list-item middle">
                  <Link
                    href="/"
                    className="header-nav-link w-nav-link w--current"
                  >
                    Home
                  </Link>
                </li>
                <li className="header-nav-list-item middle">
                  {" "}
                  <Link href="/#about" className="header-nav-link w-nav-link ">
                    About
                  </Link>
                </li>
                <li className="header-nav-list-item middle">
                  {" "}
                  <a
                    href="internship-training-program"
                    className="header-nav-link w-nav-link internship"
                  >
                    Intenship
                  </a>
                </li>
                <li className="header-nav-list-item show-in-tablet header-nav-btn">
                  <a href="/contact" className="btn-primary width-100 w-button">
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right-side">
            <a
              href="/contact"
              className="btn-primary small header-btn-hidde-on-mb w-button"
            >
              Contact us
            </a>
            <div
              onClick={() => isOpen((s) => !s)}
              className={
                open
                  ? "hamburger-menu-wrapper w-nav-button w--open"
                  : "hamburger-menu-wrapper w-nav-button"
              }
              aria-label="menu"
              role="button"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="false"
            >
              <div className="hamburger-menu-bar top"></div>
              <div className="hamburger-menu-bar bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
