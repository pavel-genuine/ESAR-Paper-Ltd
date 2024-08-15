import React from "react";

import DsnGrid from "../../layout/DsnGrid";
import ParallaxImage from "../Image/ParallaxImage";
import { dsnCN } from "../../hooks/helper";
import MoveTrigger from "../../animation/MoveTrigger";
import FadeUpTrigger from "../../animation/FadeUpTrigger";
import Button from "../button/Button";

const HeroContent = {
  title:
    "we're, <br/> <span style='color:#8b6948;' >ESAR Paper <br/>  Industries Ltd<span/> ",
  subtitle: `The starting point for countless options to study overseas!`,
  description: `Travelling to study abroad is an experience that changes people unlike anything else. This is your opportunity to travel, see different cultures, and acquire priceless skills that will influence your future. The thrill and difficulties of studying overseas are well recognised to us at ESAR.`,
  authorTitle: "",
  authorJob: "",
  experienceNumber: "15",
  experienceDescription: `YEARS OF \n EXPERIENCE`,
  heroImage: "/img/about/about.webp",
  textButton: `View More <span>⟶</span>`,
  link: {
    href: "/about",
  },
  awards: [
    { number: "15+", description: `PRODUCTS <br/> CATEGORIES` },
    { number: "35+", description: `SATISFIED <br/> CLIENTS` },
  ],
};

function HeroSection({ className, ...restProps }) {
  return (
    <section
      className={dsnCN(`about-section p-relative`, className)}
      {...restProps}
    >
      <DsnGrid col={2} colTablet={1} colGap={50} rowGap={40}>
        <div className="box-info pt-60 pb-60">
          <MoveTrigger
            from={{ y: 0 }}
            to={{ y: -70 }}
            tablet={false}
            mobile={false}
          >
            {(ref) => (
              <h2
                className=""
                dangerouslySetInnerHTML={{ __html: HeroContent.title }}
                ref={ref}
              />
            )}
          </MoveTrigger>
          <FadeUpTrigger>
            {(ref) => (
              <>
                <h6 className=" border-bottom pb-30 mb-30" ref={ref}>
                  {HeroContent.subtitle}
                </h6>
                <p
                  className="mb-30"
                  ref={ref}
                  style={{ maxWidth: 570 }}
                  dangerouslySetInnerHTML={{ __html: HeroContent.description }}
                />
                <h5
                  className="sm-title-block line-shape line-shape-after mb-10"
                  ref={ref}
                >
                  {HeroContent.authorTitle}
                </h5>

                <DsnGrid
                  className="box-awards pt-30"
                  col={2}
                  colTablet={2}
                  colGap={15}
                  rowGap={15}
                >
                  {HeroContent.awards.map((item, index) => (
                    <div
                      className="box-awards_item has-border "
                      key={index}
                      ref={ref}
                    >
                      <div className={`box-awards_inner background-section`}>
                        <span className="has-animate-number title">
                          {item.number}
                        </span>
                        <h5
                          className="sm-title-block"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  ))}
                </DsnGrid>
                <div className="mt-30">
                  <Button {...HeroContent.link} borderRadius>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: HeroContent.textButton,
                      }}
                    />
                  </Button>
                </div>
              </>
            )}
          </FadeUpTrigger>
        </div>

        <div className="background-mask p-relative over-hidden">
          <div className="p-absolute p-20 h-100 w-100">
            <div className="line line-top" />
            <div className="line line-bottom" />
            <div className="line line-left" />
            <div className="line line-right" />

            <div className="img-box h-100">
              <ParallaxImage
                src={HeroContent.heroImage}
                alt={"about"}
                height="100%"
                overlay={4}
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
              />
            </div>

            <div className="box-awards-item p-absolute big-number v-dark-head left-0 bottom-0 ml-40 mb-40 z-index-1 border-style">
              <h5 className="number p-20">
                <span
                  className="has-animate-number title"
                  style={{ fontSize: "110px", lineHeight: "120px" }}
                >
                  {HeroContent.experienceNumber}
                </span>
                {HeroContent.experienceDescription && (
                  <span
                    className="sm-title-block d-block"
                    dangerouslySetInnerHTML={{
                      __html: HeroContent.experienceDescription,
                    }}
                  />
                )}
              </h5>
            </div>
          </div>
        </div>
      </DsnGrid>
    </section>
  );
}

export default HeroSection;
