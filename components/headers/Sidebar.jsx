"use client";

import { closeSidebar } from "@/utlis/toggleSidebar";

export default function Sidebar() {
  return (
    <div className="d-none d-xl-block">
      <div className="tmp-sidebar-area tmp_side_bar">
        <div className="inner">
          <div className="top-area">
            <a href="index.html" className="logo">
              <img
                className="logo-dark"
                alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                src="/assets/images/logo/white-logo-reeni.png"
                width={121}
                height={41}
              />
              <img
                className="logo-white"
                alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                src="/assets/images/logo/logo-white.png"
                width={121}
                height={40}
              />
            </a>
            <div className="close-icon-area">
              <button
                className="tmp-round-action-btn close_side_menu_active"
                onClick={closeSidebar}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="image-area-feature">
              <a href="index.html">
                <img
                  alt="personal-logo"
                  src="/assets/images/logo/man.png"
                  width={340}
                  height={196}
                />
              </a>
            </div>
            <h5 className="title mt--30">
              IT Technician focused on systems, networking & cybersecurity fundamentals.
            </h5>
            <p className="disc">
              Computer Science Technician with a technical background in IT systems, networking and infrastructure.
              Currently developing practical skills in cybersecurity, system administration and secure technologies.
            </p>
            {/* CONTACT */}
            <div className="short-contact-area">

              <div className="single-contact">
                <i className="fa-solid fa-envelope" />
                <div className="information tmp-link-animation">
                  <span>Email</span>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@fanoor.dev&su=Portfolio%20Contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="number"
                  >
                    contact@fanoor.dev
                  </a>
                </div>
              </div>

              <div className="single-contact">
                <i className="fa-solid fa-phone" />
                <div className="information tmp-link-animation">
                  <span>Phone</span>
                  <a href="tel:+393515947733" className="number">
                    +39 351 594 7733
                  </a>
                </div>
              </div>

              <div className="single-contact">
                <i className="fa-solid fa-location-dot" />
                <div className="information tmp-link-animation">
                  <span>Location</span>
                  <span className="number">
                    Castiglione delle Stiviere (MN), Italy
                  </span>
                </div>
              </div>

            </div>

            {/* SOCIAL */}
            <div className="social-wrapper mt--20">
              <span className="subtitle">Connect</span>

              <div className="social-link">

                <a
                  href="https://www.linkedin.com/in/fahd-kharras-781b72220/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>

                <a
                  href="https://github.com/Fanoorcy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github" />
                </a>

                <a
                  href="https://www.instagram.com/akhi_fahdd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-instagram" />
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@fanoor.dev&su=Portfolio%20Contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-envelope" />
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>

      <a
        className="overlay_close_side_menu close_side_menu_active"
        onClick={closeSidebar}
        href="#"
      />
    </div>
  );
}