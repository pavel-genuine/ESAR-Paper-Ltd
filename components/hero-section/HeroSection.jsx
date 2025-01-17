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
  subtitle: `Our facility offers one of the most comprehensive ranges of apparel Trims & Packaging products and services`,
  description: `At present, our facility stands as a comprehensive and sustainable production hub, incorporating divisions dedicated to Printed Corrugated Carton, Industrial Offset Printing, Printed Fabric Label, Heat Transfer Label, and Poly Bag manufacturing. This integrated approach allows us to seamlessly cater to diverse industry needs, offering a one-stop solution for quality and sustainable packaging, labeling, and printing requirements.`,
  authorTitle: "",
  authorJob: "",
  experienceNumber: "15",
  experienceDescription: `YEARS OF \n EXPERIENCE`,
  heroImage: "/img/about/Screenshot 2025-01-16 193451.png",
  textButton: `View More <span>⟶</span>`,
  link: {
    href: "/about",
  },
  awards: [
    { number: "15+", description: `PRODUCTS <br/> CATEGORIES` },
    { number: "70+", description: `SATISFIED <br/> CLIENTS` },
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
                  style={{ maxWidth: 570, fontSize: "18px" }}
                  dangerouslySetInnerHTML={{ __html: HeroContent.description }}
                />
                <h5
                  className="sm-title-block line-shape line-shape-after mb-10"
                  ref={ref}
                >
                  {HeroContent.authorTitle}
                </h5>

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
          </div>
        </div>
      </DsnGrid>
    </section>
  );
}

export default HeroSection;
