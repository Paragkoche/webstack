import "@/app/scss/globals.scss";

import Link from "next/link";
import Logo from "./svg/Logo";

export default () => {
  return (
    <footer className="footer-wrapper">
      <div className="container-default w-container">
        <div
          data-w-id="35991685-b8a6-de3a-f085-6ec08c5834ac"
          className="footer-top border-bottom"
        >
          <div className="w-layout-grid grid-footer-2-column---logo-and-form">
            <div className="inner-container _388px">
              <Link
                href="/"
                aria-current="page"
                className="footer-logo-wrapper w-inline-block w--current"
              >
                <Logo />
              </Link>
              <p className="color-neutral-400 mg-bottom-0">
                Something bothering you just connect.
              </p>
            </div>
            <div className="buttons-row right left-tablet">
              <div className="button-row-left">
                <Link href="/contact" className="btn-primary w-button">
                  Contact us
                </Link>
              </div>
              <div className="button-row-right">
                <Link href="/#services" className="btn-secondary w-button">
                  Browse services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
