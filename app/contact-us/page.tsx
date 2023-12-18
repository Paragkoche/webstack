"use client";

import "@/app/scss/globals.scss";

import Link from "next/link";
import axios from "axios";
import { useState } from "react";
export default () => {
  const [data, setData] = useState<{
    name: string;
    email: string;
    phone: string;
    idea: string;
    company: string;
  }>({
    name: "",
    email: "",
    idea: "",
    phone: "",
    company: "",
  });
  const [sending, setSanding] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const send_data = (e: Event | any) => {
    e.preventDefault();
    setText("Sending...");
    setSanding((s) => !s);

    axios.post("https://5gvhur.deta.dev/add", data).then(
      () => {
        setText("your data is sended");
        setTimeout(() => {
          setText("");
        }, 500);
        setSanding((s) => !s);
        setData({
          name: "",
          email: "",
          idea: "",
          phone: "",
          company: "",
        });
      },
      () => {
        setText("not sending 😔😔");
        setSanding((s) => !s);
      }
    );
  };
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
                    href="mailto:webstack.org@gmail.com"
                    className="card link-card contact w-inline-block"
                  >
                    <div className="card-contact-icon">
                      <div className="line-rounded-icon"></div>
                    </div>
                    <div className="text-200 bold">support@webstack.in</div>
                  </Link>
                  <Link
                    href="tel:+91 8080754160"
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
            <form onSubmit={send_data}>
              <div className="w-layout-grid grid-2-columns form">
                <div>
                  <label htmlFor="Name">Name</label>
                  <input
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
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
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
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
                    value={data.phone}
                    onChange={(e) =>
                      setData({ ...data, phone: e.target.value })
                    }
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
                    value={data.company}
                    onChange={(e) =>
                      setData({ ...data, company: e.target.value })
                    }
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
                    value={data.idea}
                    onChange={(e) => setData({ ...data, idea: e.target.value })}
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
                  value={sending ? text : "Get in touch"}
                  className="btn-primary card-form w-button"
                  style={{
                    backgroundColor: text.startsWith("err") ? "tomato" : "",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
