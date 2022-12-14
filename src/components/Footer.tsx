import { Link } from "react-router-dom";

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
            to="/"
            aria-current="page"
            className="footer-logo-wrapper w-inline-block w--current"
          >
            <img
              src="logo.png"
             
              className="footer-logo"
            />
          </Link>
          <p className="color-neutral-400 mg-bottom-0">
            Lorem ipsum dolor sit amet consectetur dolorolme adipiscing elit
            phasellus <span className="text-no-wrap">amet dui.</span>
          </p>
        </div>
        <div className="buttons-row right left-tablet">
          <div className="button-row-left">
            <Link to="/contact" className="btn-primary w-button">
              Contact us
            </Link>
          </div>
          <div className="button-row-right">
            <Link to="/#services" className="btn-secondary w-button">
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
