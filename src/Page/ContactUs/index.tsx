import { Link } from "react-router-dom";

export default () => {
  return (
    <section className="section hero v5 wf-section">
      <div className="container-default w-container">
        <div className="w-layout-grid grid-2-columns contact">
          <div>
            <div className="inner-container _430px">
              <div className="inner-container _400px-tablet">
                <div className="inner-container _290px-mbl">
                  <div className="inner-container _210px-mbp">
                    <h1 className="display-2 mg-bottom-8px">
                      Get in <span className="color-accent-1">touch</span> with
                      our team
                    </h1>
                  </div>
                </div>
                <p
                  data-w-id="bfc9454a-5762-abff-1fb2-68ec534c12fd"
                  className="mg-bottom-40px"
                >
                  Give us a chance to clear your doubts
                </p>
              </div>
            </div>
            <div>
              <div className="heading-h3-size mg-bottom-16px">
                Contact information
              </div>
              <div className="inner-container _311px _100-tablet">
                <div className="w-layout-grid grid-1-column gap-row-20px _2-col-tablet _1-col-mbp">
                  <Link
                    to="mailto:webstack.org@gmail.com"
                    className="card link-card contact w-inline-block"
                  >
                    <div className="card-contact-icon">
                      <div className="line-rounded-icon"></div>
                    </div>
                    <div className="text-200 bold">webstack.org@gmail.com</div>
                  </Link>
                  <Link
                    to="tel:+91 8080754160"
                    className="card link-card contact w-inline-block"
                  >
                    <div className="card-contact-icon">
                      <div className="line-rounded-icon"></div>
                    </div>
                    <div className="text-200 bold">+91 8080754160</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="card form w-form">
            <form method="get">
              <div className="w-layout-grid grid-2-columns form">
                <div>
                  <label htmlFor="Name">Name</label>
                  <input
                    type="text"
                    className="input w-input"
                    maxLength={256}
                    name="Name"
                    data-name="Name"
                    placeholder="John Carter"
                    id="Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    className="input w-input"
                    maxLength={256}
                    name="Email"
                    data-name="Email"
                    placeholder="example@email.com"
                    id="Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Phone">Phone</label>
                  <input
                    type="tel"
                    className="input w-input"
                    maxLength={256}
                    name="Phone"
                    data-name="Phone"
                    placeholder="123 456 7890"
                    id="Phone"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Company">Company (optional)</label>
                  <input
                    type="text"
                    className="input w-input"
                    maxLength={256}
                    name="Company"
                    data-name="Company"
                    placeholder="Facebook"
                    id="Company"
                  />
                </div>
                <div className="text-area-wrapper">
                  <label htmlFor="Message">Your idea </label>
                  <textarea
                    placeholder="Please type your message here..."
                    maxLength={5000}
                    id="Message"
                    name="Message"
                    data-name="Message"
                    className="text-area w-input"
                    required
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Get in touch"
                  className="btn-primary card-form w-button"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
