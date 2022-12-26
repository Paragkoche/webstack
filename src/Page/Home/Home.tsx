import image from "../../assets/intro.png";
import img1 from "../../assets/Frontend Development.png";
import img2 from "../../assets/Backend Development.png";
import img3 from "../../assets/Mobile App Development.png";
import img4 from "../../assets/AI & Machine Learning.png";
import img5 from "../../assets/Databases & Data Science.png";
import img6 from "../../assets/Servers & Cloud Infrastructure.png";
import A from "../../assets/a.png";
import sarvashImg from "../../assets/sarvash.jpg";
import samikshaImg from "../../assets/samiksha.jpg";
import KrishImg from "../../assets/krish.jpg";
import HasanImg from "../../assets/hasan.jpg";
import SudhanshuImg from "../../assets/Sudhanshu.jpg";
import ParagImg from "../../assets/parag.webp";
import PrajwalImg from "../../assets/Prajwal.jpg";
import KrutikaImg from "../../assets/Krutika.jpg";
import SanjviImg from "../../assets/Sanjvi.jpg";
import AdityaImg from "../../assets/Aditya.jpg";
import Card from "../../components/Card";
import { Link } from "react-router-dom";

export default () => {
  return (
    <>
      <section className="section hero wf-section">
        <div className="container-default w-container">
          <div className="position-relative">
            <div className="flex-horizontal align-center flex-vertical-mbl">
              <div className="position-relative z-index-1">
                <div className="inner-container _677px _70-tablet _100-mbl">
                  <div className="inner-container _550px-mbl">
                    <div className="text-center-mbl">
                      <h1 className="display-2">
                        We are a top-notch{" "}
                        <span className="color-accent-1">
                          development&nbsp;
                        </span>
                        agency
                      </h1>
                      <div className="inner-container _591px">
                        <p className="mg-bottom-40px">
                          We just make your ideas{" "}
                          <span className="text-no-wrap color-accent-1">
                            Alive
                          </span>
                        </p>
                      </div>
                      <div className="buttons-row center-mbl">
                        <div className="button-row-left">
                          <Link to="/contact" className="btn-primary w-button">
                            Contact us
                          </Link>
                        </div>
                        <div className="button-row-right">
                          <Link
                            to="#services"
                            className="btn-secondary w-button"
                          >
                            Our services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="image bg-hero"
                src={image}
                width="1971.5"

                // srcSet="https://assets.website-files.com/6217ab51d0be6929e3513ef6/623f4a6e8212d740e0246c81_image-hero-dev-webflow-template-p-500.png 500w, https://assets.website-files.com/6217ab51d0be6929e3513ef6/623f4a6e8212d740e0246c81_image-hero-dev-webflow-template-p-800.png 800w, https://assets.website-files.com/6217ab51d0be6929e3513ef6/623f4a6e8212d740e0246c81_image-hero-dev-webflow-template-p-1080.png 1080w, https://assets.website-files.com/6217ab51d0be6929e3513ef6/623f4a6e8212d740e0246c81_image-hero-dev-webflow-template-p-1600.png 1600w, https://assets.website-files.com/6217ab51d0be6929e3513ef6/623f4a6e8212d740e0246c81_image-hero-dev-webflow-template-p-2000.png 2000w, https://assets.website-files.com/6217ab51d0be6929e3513ef6/623f4a6e8212d740e0246c81_image-hero-dev-webflow-template-p-2600.png 2600w, https://assets.website-files.com/6217ab51d0be6929e3513ef6/623f4a6e8212d740e0246c81_image-hero-dev-webflow-template.png 3943w"
              />
              <div className="position-absolute bg-circle-default hero-bg">
                <div className="bg-circle-gradient">
                  <div className="bg-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="position-absolute bottom fade hero"></div>
      </section>
      <div className="container-default w-container">
        <div
          data-w-id="17e93d7f-7133-21c1-471a-73a7f5dbf3ad"
          className="divider _0px"
        ></div>
      </div>
      <section className="section wf-section" id="services">
        <div className="container-default w-container">
          <div className="inner-container _550px-mbl center">
            <div className="position-relative z-index-1">
              <div
                data-w-id="65a15e03-2a1a-a285-0c87-62915523076a"
                className="mg-bottom-48px"
              >
                <div className="inner-container _625px center">
                  <div className="text-center">
                    <h2 className="display-3">
                      We are development experts on all{" "}
                      <span className="color-accent-1">technologies</span> &amp;{" "}
                      <span className="color-accent-1">platforms</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-layout-grid grid-3-columns gap-32px">
              {[
                {
                  image: img1,
                  title: "Frontend Development",
                  para: "Eye catching and attractive looking designs .",
                },
                {
                  image: img2,
                  title: "Backend Development",
                  para: "Reliable fast and secured ",
                },
                {
                  image: img3,
                  title: "Mobile App Development",
                  para: "We build for portable devices too",
                },
                {
                  image: img4,
                  title: "AI & Machine Learning",
                  para: "Use modern technology to enhance",
                },
                {
                  image: img5,
                  title: "Databases & Data Science",
                  para: "Comfortable  data handling and  research stats .",
                },
                {
                  image: img6,
                  title: "Servers & Cloud Infrastructure",
                  para: "All your information cloud based so no need to worry about system configuration",
                },
              ].map((v, i) => (
                <Card key={i} {...v} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="container-default w-container">
        <div
          data-w-id="17e93d7f-7133-21c1-471a-73a7f5dbf3ad"
          className="divider _0px"
        ></div>
      </div>
      <section className="section wf-section" id="about">
        <div className="container-default w-container">
          <div className="mg-bottom-24px">
            <div className="inner-container _490px center no-center-mbl">
              <div className="inner-container _350px-mbl">
                <div className="text-center text-left-mbl">
                  <h2 className="display-3">
                    We are an agile team of passionate{" "}
                    <span className="color-accent-1">developers</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="inner-container _1040px center">
            <div className="mg-bottom-56px">
              <div
                data-w-id="65a7bc18-64e4-a5e7-397b-c6d22e94bbab"
                className="w-layout-grid grid-3-columns gap-40px perks"
              >
                <div
                  id="w-node-_9374d57f-a804-4971-9c6a-a1f1b8fcfcb2-3c513ef8"
                  className="flex-horizontal align-center"
                >
                  <div className="mg-right-14px">
                    <div className="check-icon">
                      <div className="line-rounded-icon"></div>
                    </div>
                  </div>
                  <div className="text-200 bold color-neutral-100">
                    Deliver your MVP in 4 weeks{" "}
                    <span className="text-no-wrap">or less</span>
                  </div>
                </div>
                <div
                  id="w-node-_036ae42a-5563-26f9-22a4-7a08d3a700b3-3c513ef8"
                  className="flex-horizontal align-center"
                >
                  <div className="mg-right-14px">
                    <div className="check-icon">
                      <div className="line-rounded-icon"></div>
                    </div>
                  </div>
                  <div className="text-200 bold color-neutral-100">
                    Efficient and scalable infraestructure
                  </div>
                </div>
                <div
                  id="w-node-cfcd314f-b1be-a4ff-5994-22021737c5c0-3c513ef8"
                  className="flex-horizontal align-center"
                >
                  <div className="mg-right-14px">
                    <div className="check-icon">
                      <div className="line-rounded-icon"></div>
                    </div>
                  </div>
                  <div className="text-200 bold color-neutral-100">
                    Affordable cost{" "}
                    <span className="text-no-wrap">for startups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-w-id="850264c1-96c3-2efa-7889-00193e1e9203"
            className="image-wrapper"
          >
            <img src={A} className="image cover" />
          </div>
          <div className="mg-top-64px">
            <div
              data-w-id="4b72384c-f74a-e6ef-0f6e-f037e3076f50"
              className="buttons-row center"
            >
              <div className="button-row-left">
                <Link to="/contact" className="btn-primary w-button">
                  Contact us
                </Link>
              </div>
              <div className="button-row-right">
                <Link to="#team" className="btn-secondary w-button">
                  Meet our team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-default w-container" id="team">
        <div
          data-w-id="17e93d7f-7133-21c1-471a-73a7f5dbf3ad"
          className="divider _0px"
        ></div>
      </div>
      <section className="section wf-section" style={{ overflowX: "hidden" }}>
        <div className="container-default w-container">
          <div className="mg-bottom-30px">
            <div className="inner-container _443px">
              <div className="inner-container _290px-mbl">
                <h2 className="display-3">Our Team</h2>
              </div>
            </div>
          </div>
          <div
            data-delay="4000"
            data-animation="slide"
            data-autoplay="false"
            data-easing="ease"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-w-id="c55f9bef-5874-4fd3-32f0-b8e103502d24"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
            role="region"
            aria-label="carousel"
            className="slider-wrapper top-left-arrows w-slider"
          >
            <div
              className="slider-mask width-586px w-slider-mask"
              id="w-slider-mask-0"
            >
              {[
                {
                  image: ParagImg,
                  name: "Parag Koche",
                  bio: `Founder and ceo of Webstack 
                  <br/>leader and path director`,
                },
                {
                  image: SudhanshuImg,
                  name: "Sudhanshu Jambhulkar",
                  bio: `
                Co-Founder of Webstack<br/>
Business manager 
                `,
                },
                {
                  image: "",
                  name: "Yash Gajbhiye",
                  bio: `Senior Full stack developer and strong visualizer`,
                },
                {
                  image: samikshaImg,
                  name: "Samiksha Debe",
                  bio: "Front end developer",
                },
                {
                  image: HasanImg,
                  name: "Hasan Khan",
                  bio: "AI and ML specialist",
                },
                {
                  image: KrutikaImg,
                  name: "Krutika Meshram",
                  bio: "UI Designer",
                },
                {
                  image: KrishImg,
                  name: "Krish Bagde",
                  bio: "Data Science specialist",
                },
                {
                  image: SanjviImg,
                  name: "Sanjvi Nishane",
                  bio: "Front End developer",
                },
                {
                  image: sarvashImg,
                  name: "Sarvesh Navare",
                  bio: "Front End Developer",
                },
                {
                  image: PrajwalImg,
                  name: "Prajwal Pakahale",
                  bio: "Project manager",
                },
                {
                  image: "",
                  name: "Harish Hedau",
                  bio: "Android Developer",
                },
                {
                  image: "",
                  name: "Gunjan Haldar",
                  bio: "Android Developer",
                },
                {
                  image: AdityaImg,
                  name: "Aditya Chandure",
                  bio: "Full Stack Developer",
                },
              ].map((v, i) => (
                <div
                  className="slide-item-mg w-slide"
                  aria-label={`${i + 1} of 4`}
                  role="group"
                >
                  <div className="w-dyn-list">
                    <div role="list" className="w-dyn-items">
                      <div role="listitem" className="w-dyn-item">
                        <div className="card link-card post-item w-inline-block">
                          <div className="image-wrapper">
                            <img src={v.image} className="image cover" />
                          </div>
                          <div className="card-post-content">
                            <h3 className="heading-h3-size mg-bottom-16px">
                              {v.name}
                            </h3>
                            <p
                              className="mg-bottom-0"
                              dangerouslySetInnerHTML={{ __html: v.bio }}
                            ></p>
                            <div className="mg-top-auto">
                              <div className="divider _32px"></div>
                              <div
                                className="w-layout-grid grid-1-row card-post"
                                style={{
                                  gridTemplateColumns: "1fr 1fr 1fr !important",
                                }}
                              >
                                <Link to="/" className="badge-secondary small">
                                  <svg
                                    width="24"
                                    height="25"
                                    viewBox="0 0 24 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M13 10.0625H16V13.0625H13V20.0625H10V13.0625H7V10.0625H10V8.8075C10 7.6185 10.374 6.1165 11.118 5.2955C11.862 4.4725 12.791 4.0625 13.904 4.0625H16V7.0625H13.9C13.402 7.0625 13 7.4645 13 7.9615V10.0625Z"
                                      fill="white"
                                    />
                                  </svg>
                                </Link>
                                <Link to="/" className="badge-secondary small">
                                  <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8.20625 2.0625H16.6063C19.8063 2.0625 22.4062 4.6625 22.4062 7.8625V16.2625C22.4062 17.8008 21.7952 19.276 20.7075 20.3637C19.6198 21.4514 18.1445 22.0625 16.6063 22.0625H8.20625C5.00625 22.0625 2.40625 19.4625 2.40625 16.2625V7.8625C2.40625 6.32424 3.01732 4.84899 4.10503 3.76128C5.19274 2.67357 6.66799 2.0625 8.20625 2.0625ZM8.00625 4.0625C7.05147 4.0625 6.1358 4.44178 5.46067 5.11692C4.78553 5.79205 4.40625 6.70772 4.40625 7.6625V16.4625C4.40625 18.4525 6.01625 20.0625 8.00625 20.0625H16.8062C17.761 20.0625 18.6767 19.6832 19.3518 19.0081C20.027 18.333 20.4062 17.4173 20.4062 16.4625V7.6625C20.4062 5.6725 18.7962 4.0625 16.8062 4.0625H8.00625ZM17.6562 5.5625C17.9878 5.5625 18.3057 5.6942 18.5401 5.92862C18.7746 6.16304 18.9062 6.48098 18.9062 6.8125C18.9062 7.14402 18.7746 7.46196 18.5401 7.69638C18.3057 7.9308 17.9878 8.0625 17.6562 8.0625C17.3247 8.0625 17.0068 7.9308 16.7724 7.69638C16.5379 7.46196 16.4062 7.14402 16.4062 6.8125C16.4062 6.48098 16.5379 6.16304 16.7724 5.92862C17.0068 5.6942 17.3247 5.5625 17.6562 5.5625ZM12.4062 7.0625C13.7323 7.0625 15.0041 7.58928 15.9418 8.52697C16.8795 9.46465 17.4062 10.7364 17.4062 12.0625C17.4062 13.3886 16.8795 14.6604 15.9418 15.598C15.0041 16.5357 13.7323 17.0625 12.4062 17.0625C11.0802 17.0625 9.8084 16.5357 8.87072 15.598C7.93303 14.6604 7.40625 13.3886 7.40625 12.0625C7.40625 10.7364 7.93303 9.46465 8.87072 8.52697C9.8084 7.58928 11.0802 7.0625 12.4062 7.0625ZM12.4062 9.0625C11.6106 9.0625 10.8475 9.37857 10.2849 9.94118C9.72232 10.5038 9.40625 11.2669 9.40625 12.0625C9.40625 12.8581 9.72232 13.6212 10.2849 14.1838C10.8475 14.7464 11.6106 15.0625 12.4062 15.0625C13.2019 15.0625 13.965 14.7464 14.5276 14.1838C15.0902 13.6212 15.4062 12.8581 15.4062 12.0625C15.4062 11.2669 15.0902 10.5038 14.5276 9.94118C13.965 9.37857 13.2019 9.0625 12.4062 9.0625Z"
                                      fill="white"
                                    />
                                  </svg>
                                </Link>
                                <Link to="/" className="badge-secondary small">
                                  <svg
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M10.1875 7.5625C10.1875 7.785 10.1215 8.00251 9.9979 8.18752C9.87429 8.37252 9.69859 8.51672 9.49302 8.60186C9.28745 8.68701 9.06125 8.70929 8.84302 8.66588C8.62479 8.62248 8.42434 8.51533 8.267 8.358C8.10967 8.20066 8.00252 8.00021 7.95912 7.78198C7.91571 7.56375 7.93799 7.33755 8.02314 7.13198C8.10828 6.92641 8.25248 6.75071 8.43748 6.6271C8.62249 6.50348 8.84 6.4375 9.0625 6.4375C9.36087 6.4375 9.64702 6.55603 9.858 6.767C10.069 6.97798 10.1875 7.26413 10.1875 7.5625ZM22.1875 4.1875V19.9375C22.1875 20.3353 22.0295 20.7169 21.7482 20.9982C21.4669 21.2795 21.0853 21.4375 20.6875 21.4375H4.9375C4.53968 21.4375 4.15814 21.2795 3.87684 20.9982C3.59554 20.7169 3.4375 20.3353 3.4375 19.9375V4.1875C3.4375 3.78968 3.59554 3.40814 3.87684 3.12684C4.15814 2.84554 4.53968 2.6875 4.9375 2.6875H20.6875C21.0853 2.6875 21.4669 2.84554 21.7482 3.12684C22.0295 3.40814 22.1875 3.78968 22.1875 4.1875ZM20.6875 19.9375V4.1875H4.9375V19.9375H20.6875ZM9.0625 9.8125C8.86359 9.8125 8.67282 9.89152 8.53217 10.0322C8.39152 10.1728 8.3125 10.3636 8.3125 10.5625V16.5625C8.3125 16.7614 8.39152 16.9522 8.53217 17.0928C8.67282 17.2335 8.86359 17.3125 9.0625 17.3125C9.26141 17.3125 9.45218 17.2335 9.59283 17.0928C9.73348 16.9522 9.8125 16.7614 9.8125 16.5625V10.5625C9.8125 10.3636 9.73348 10.1728 9.59283 10.0322C9.45218 9.89152 9.26141 9.8125 9.0625 9.8125ZM14.6875 9.8125C14.0123 9.81246 13.3526 10.0149 12.7938 10.3937C12.7527 10.2138 12.6468 10.0553 12.4962 9.94853C12.3456 9.84178 12.161 9.79432 11.9776 9.81521C11.7942 9.8361 11.625 9.92389 11.5023 10.0618C11.3795 10.1996 11.312 10.3779 11.3125 10.5625V16.5625C11.3125 16.7614 11.3915 16.9522 11.5322 17.0928C11.6728 17.2335 11.8636 17.3125 12.0625 17.3125C12.2614 17.3125 12.4522 17.2335 12.5928 17.0928C12.7335 16.9522 12.8125 16.7614 12.8125 16.5625V13.1875C12.8125 12.6902 13.01 12.2133 13.3617 11.8617C13.7133 11.51 14.1902 11.3125 14.6875 11.3125C15.1848 11.3125 15.6617 11.51 16.0133 11.8617C16.365 12.2133 16.5625 12.6902 16.5625 13.1875V16.5625C16.5625 16.7614 16.6415 16.9522 16.7822 17.0928C16.9228 17.2335 17.1136 17.3125 17.3125 17.3125C17.5114 17.3125 17.7022 17.2335 17.8428 17.0928C17.9835 16.9522 18.0625 16.7614 18.0625 16.5625V13.1875C18.0625 12.2924 17.7069 11.434 17.074 10.801C16.441 10.1681 15.5826 9.8125 14.6875 9.8125Z"
                                      fill="white"
                                    />
                                  </svg>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div
                aria-live="off"
                aria-atomic="true"
                className="w-slider-aria-label"
                data-wf-ignore=""
              ></div>
            </div>
            <div
              className="btn-circle-secondary slider-arrow left---top-left w-slider-arrow-left"
              role="button"
              aria-controls="w-slider-mask-0"
              aria-label="previous slide"
            >
              <div className="line-rounded-icon"></div>
            </div>
            <div
              className="btn-circle-secondary slider-arrow right---top-left w-slider-arrow-right"
              role="button"
              aria-controls="w-slider-mask-0"
              aria-label="next slide"
            >
              <div className="line-rounded-icon"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
