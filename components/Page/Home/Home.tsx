import Card from "@/components/Card";
import img4 from "@/public/assets/AI & Machine Learning.png";
import img2 from "@/public/assets/Backend Development.png";
import img5 from "@/public/assets/Databases & Data Science.png";
import img1 from "@/public/assets/Frontend Development.png";
import img3 from "@/public/assets/Mobile App Development.png";
import img6 from "@/public/assets/Servers & Cloud Infrastructure.png";
import A from "@/public/assets/a.png";
import image from "@/public/assets/intro.png";
import Image from "next/image";
import Link from "next/link";

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
                          <Link
                            href="/contact"
                            className="btn-primary w-button"
                          >
                            Contact us
                          </Link>
                        </div>
                        <div className="button-row-right">
                          <Link
                            href="#services"
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
              <Image
                className="image bg-hero"
                src={image}
                alt="img"
                width={1000}
                height={673}
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
            <Image
              src={A}
              alt="img"
              width={1500}
              height={991}
              className="image cover"
            />
          </div>
          <div className="mg-top-64px">
            <div
              data-w-id="4b72384c-f74a-e6ef-0f6e-f037e3076f50"
              className="buttons-row center"
            >
              <div className="button-row-left">
                <Link href="/contact" className="btn-primary w-button">
                  Contact us
                </Link>
              </div>
              <div className="button-row-right">
                <Link href="#team" className="btn-secondary w-button">
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
    </>
  );
};
