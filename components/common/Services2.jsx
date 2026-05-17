import React from "react";
import Image from "next/image";
import { serviceCards } from "@/data/services";
export default function Services2() {
  return (
    <section className="latest-service-area tmp-section-gapTop">
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
  <span className="subtitle">What I Work On</span>
</div>

<h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
  Building Skills in IT Systems & Cybersecurity
</h2>

<p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
  I focus on developing practical knowledge in computer systems, networking and IT infrastructure through hands-on learning, technical projects and continuous study. My goal is to build strong foundations in IT while progressing toward cybersecurity and system security practices.
</p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className={`service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${
                  index + 1
                }`}
              >
                <h2 className="service-card-num">
                  <span>{`0${index + 1}.`}</span>
                  {card.title}
                </h2>
                <p className="service-para">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <div className="service-card-user-image">
              <Image
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                alt="latest-user-image"
                width={567}
                height={588}
                src="/assets/images/services/latest-services-user-image-two.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
