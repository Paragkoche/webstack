import { Link } from "react-router-dom";

export default () => {
  return (
    <section className="section hero v5 wf-section">
      <div className="container-default w-container">
        <div className="inner-container _633px center">
          <div className="position-relative">
            <div
              data-w-id="619efe17469a19c94a600b1500000000000b"
              className="card not-found w-form"
            >
              <div className="text-center">
                <div className="_404-not-found">404</div>
                <h1 className="mg-bottom-0">Page not found</h1>
                <p className="mg-bottom-35px">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et{" "}
                  <span className="text-no-wrap">dolore magna.</span>
                </p>
              </div>
              <div className="buttons-row center">
                <Link to="/" className="btn-primary button-row w-button">
                  Back home
                </Link>
              </div>
            </div>
            <div
              data-w-id="1c4a592a-0d74-6237-5854-e7fc89220c7a"
              className="position-absolute bg-square-default not-found-bg"
            >
              <div className="bg-square-gradient">
                <div className="bg-square"></div>
              </div>
            </div>
            <div
              data-w-id="03c599b0-3d51-865d-7bbd-0fe6c5c1dd52"
              className="position-absolute bg-circle-default not-found-bg"
            >
              <div className="bg-circle-gradient">
                <div className="bg-circle"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
