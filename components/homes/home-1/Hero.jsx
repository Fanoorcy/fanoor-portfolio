import React from "react";
import Image from "next/image";
import Link from "next/link";
import TyperComponent from "@/components/common/TyperComponent";
export default function Hero() {
  return (
    <div className="tmp-banner-one-area">
      <div className="container">
        <div className="banner-one-main-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="banner-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt="banner-img"
                  src="/assets/images/banner/banner-user-image-one.png"
                  width={486}
                  height={781}
                />
                <h2 className="banner-big-text-1 up-down">ETHICAL HACKER</h2>
                <h2 className="banner-big-text-2 up-down-2">ETHICAL HACKER</h2>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="inner">
                <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                  Hello
                </span>
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2 mt--5">
                  i’m Fanoor a <br />
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <TyperComponent
                        strings={[
                          "Ethical Hacker.",
                          "Cybersecurity Specialist.",
                          "Network Security Analyst.",
                          "Penetration Tester.",
                          "Security Consultant.",
                        ]}
                      />
                    </span>
                  </span>
                </h1>
                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                  I’m passionate about IT and cybersecurity, with a strong focus on ethical hacking and networking. 
                  I’m constantly learning through hands-on projects and real-world problem solving in system and network security.
                </p>
                <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                  <Link
                    className="tmp-btn hover-icon-reverse radius-round"
                    href={`/project`}
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">View Portfolio</span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="fa-sharp fa-regular fa-arrow-right" />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
