import React from "react";
import Layout from "../layout/Layout";
import TitleSection from "../components/heading/TitleSection";
import SliderPortfolio from "../components/slider-portfolio/SliderPortfolio";
import HeroSection2 from "../components/hero-section/HeroSection2";
import ServiceSwiperOne from "../components/services/swiper/ServiceSwiperOne";
import PortfolioSwiper from "../components/portfolio/PortfolioSwiper";
import Facts from "../components/facts/Facts";
import BgDot from "../components/header/BgDot";
import BlogSwiper from "../components/bolg/BlogSwiper";
import SwiperPagination from "../components/swiper-pagination/SwiperPagination";
import BrandClient from "../components/brand-client/BrandClient";
import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";
import Button from "../components/button/Button";
import HeroButton from "../components/button/HeroButton";
import HeroSection from "../components/hero-section/HeroSection";
import ServiceOne from "../components/services/grid/ServiceOne";
import HeroSectionThree from "../components/hero-section/HeroSectionThree";
import DsnGrid from "../layout/DsnGrid";
import ParallaxImage from "../components/Image/ParallaxImage";
import List, { ListItem } from "../components/list/List";
import Accordion, { AccordionItem } from "../components/accordion/Accordion";
import Portfolio from "../components/portfolio/Portfolio";
import BoxGallery, { BoxGalleryItem } from "../components/box-gallery/BoxGallery";
import ButtonProject from "../components/button/ButtonProject";
import HeaderFull from "../components/header/HeaderFull";
import { getPortfolioItem } from "../data/portfolio";
import Image from "next/image";
import MoveBox from "../components/move-box/MoveBox";
import FJustifiedGallery from "../components/justified-gallery/FJustifiedGallery";
import TitleCover from "../components/heading/TitleCover";

const dataSlider = [
    {
        id: 1,
        title: `Craft Elegant <br /> Solutions`,
        href: {
            href: "#0",
            target: "_blank",
            rel: "nofollow"
        },
        buttonText: "ESAR Paper Industries Limited",
        subtitle: `We're a design studio that believe in the ideas`,
        src: '/img/esar/box.avif',
        overlay: 6,

    },
    {
        id: 2,
        title: `Craft Elegant <br /> Solutions`,
        href: {
            href: "#0",
            target: "_blank",
            rel: "nofollow"
        },
        buttonText: "ESAR Paper Industries Limited",
        subtitle: `We're a design studio that believe in the ideas`,
        src: '/img/esar/zipper.jpg',
        overlay: 6,

    },
    {
        id: 22,
        title: `Craft Elegant <br /> Solutions`,
        href: {
            href: "#0",
            target: "_blank",
            rel: "nofollow"
        },
        buttonText: "ESAR Paper Industries Limited",
        subtitle: `We're a design studio that believe in the ideas`,
        src: '/img/esar/buttons.webp',
        overlay: 6,

    },
    {
        id: 3,
        title: `Crafting Digital <br/> Experiences`,

        href: {
            href: "#0",
            target: "_blank",
            rel: "nofollow"
        },
        buttonText: "ESAR Paper Industries Limited",
        src: '/img/esar/Woven and Printed Labels1.jpg',
        subtitle: `we combine design, thinking and technical craft`,
        overlay: 6,

    },
    {
        id: 4,
        title: `Creative <br/> Solutions`,
        href: {
            href: "#0",
            target: "_blank",
            rel: "nofollow"
        },
        buttonText: "ESAR Paper Industries Limited",
        src: '/img/esar/Belly Band & Photo Inlays.jpg',
        subtitle: `We're a design studio that believe in the ideas`,
        overlay: 6
    },
    {
        id: 5,
        title: `Creative <br/> Solutions`,
        href: {
            href: "#0",
            target: "_blank",
            rel: "nofollow"
        },
        buttonText: "ESAR Paper Industries Limited",
        src: '/img/esar/Hang Tags (1).jpg',
        subtitle: `We're a design studio that believe in the ideas`,
        overlay: 6
    },

]

function Corporate() {


    TitleSection.defaultProps = {
        className: "align-items-center text-center",
        classDesc: "line-shape line-shape-after",
        classDesInner: "line-bg-left"
    }
    const heroData = getPortfolioItem('paper-based-packaging-box');

    return (
        <Layout modelRight={{ children: <ModalContact />, propsModal: { textBtn: "Contact" } }}>

            <Head>
                <title>ESAR Paper Industries Ltd </title>
            </Head>
            <div data-dsn-title="Banner">
                <div>
                    <div className="hero-logo " >
                        <HeroButton className={"link-custom mt-20"} >
                        </HeroButton>
                        <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', }}>
                            <div style={{ width: '110px', height: '110px', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                                {/* <Logo width="90px" height="auto" /> */}
                            </div>
                            {/* <p style={{ fontSize: '25px', color: 'white', backgroundColor: '#dbc768', padding: '10px' }}>ESAR Paper <br /> Industries <br /> Limited</p> */}
                        </div>
                    </div>
                </div>
                <SliderPortfolio webgel
                    fullWidth
                    alignControlNav={"center"}
                    className="align-items-center justify-content-center text-center"
                    data={dataSlider}
                    webgelOptions={{ displacement: "/img/displacement/8.jpg", speedIn: 3.5 }}
                    metaData={{ hasSeparator: false }}

                />
            </div>

            {/*<!-- ========== About Section ========== */}
            <section className=" section-padding v-light full-width  " data-dsn-title="About Us">
                <div className="container">
                    <HeroSection />
                </div>
            </section>            {/*<!-- ========== End about section ========== */}



            {/*<!-- ========== facts-section ==========*/}

            <div className="section-padding p-relative background-section">
                <BgDot />
                <BgDot rightPosition />
                <div className="container">
                    <Facts className="text-center" col={4} colTablet={2} />
                </div>
            </div>
            {/*<!-- ========== end facts-section ========== */}

            {/*Start Service*/}
            {/* 
            <div className="container section-margin" data-dsn-title="Our Services">
                <TitleSection
                    className="align-items-center text-center"
                    description={"Our Services"}
                >
                    We are providing complete study abroad solution <br /> all over the world for you.
                </TitleSection>
                <ServiceOne />
            </div> */}



            {/* <div className="container section-margin" data-dsn-title="our Services">
                <TitleSection description={"WHY CHOOSE US?"}>
                    We are delivering beautiful <br /> products for you.
                </TitleSection>
                <ServiceSwiperOne />
            </div> */}
            {/*End Service*/}

            {/*Start Portfolio*/}
            <PortfolioSwiper grabCursor
                desktop={{ spaceBetween: 0, slidesPerView: 3 }}
                tablet={{ spaceBetween: 0, slidesPerView: 2, centeredSlides: false }}
                mobile={{ spaceBetween: 0, slidesPerView: 1, centeredSlides: false }}
                stylePortfolio="work-section work-no-scale"
                className="text-center v-dark-head"
                centeredSlides loop
                parallax
                speed={800}
                watchSlidesProgress
                loopedSlides={2}
                data-dsn-title="our Work"
            />

            {/*End Portfolio*/}
            {/*<!-- ========== facts-section ==========*/}

            {/*<!-- ========== end facts-section ========== */}


            <div className=" section-padding v-light full-width  " >
                <div className="container">
                    <Portfolio stylePortfolio={"work-section"}
                        className="title-inherit h4 "
                        useFilter

                        col={3} colGap={50} rowGap={80}
                    />
                </div>
            </div>



            <section>
                {/* 
                <section className="v-ligh" >
                    <FJustifiedGallery
                        images={[

                            {
                                src: "/img/project/project4/4.jpg",
                                caption: "Web Design",
                            },
                            {
                                src: "/img/project/project4/5.jpg",
                                caption: "Web Design",
                            },
                            {
                                src: "/img/project/project4/6.jpg",
                                caption: "Web Design",
                            },
                            {
                                src: "/img/project/project4/7.jpg",
                                caption: "Web Design",
                            },
                            {
                                src: "/img/project/project4/8.jpg",
                                caption: "Web Design",
                            },
                            {
                                src: "/img/project/project4/9.jpg",
                                caption: "Web Design",
                            },
                            {
                                src: "/img/project/project4/10.jpg",
                                caption: "Web Design",
                            },
                            {
                                src: "/img/project/project4/11.jpg",
                                caption: "Web Design",
                            },
                        ]}
                        className="section-margin"
                    />

                </section> */}
                {/*Start Box Info Move Content*/}
                <div className="p-relative section-margin v-light">
                    <ParallaxImage src="/img/esar/Woven and Printed Labels1.jpg" overlay={2} alt={""} />
                    <MoveBox>
                        <TitleSection className={`align-items-start mb-30`}
                            defaultSpace={false}>
                            Discover the perfect match for your brand...
                        </TitleSection>


                        <p className="mb-10">Trims contribute to the visual appeal and design aesthetics of products. Hangtags, Labels and other trims serve as a direct communication tool between the brand and the consumer, conveying important information and contributing to the overall branding and marketing strategy.</p>
                        <p>. The design and content of trims can vary widely based on the brand's identity, target audience, and the nature of the product. </p>

                    </MoveBox>
                </div>
                {/*End Box Info Move Content*/}
            </section>


            <section>


                {/*Start Gallery List*/}
                <div className="mt-section mb-sm-section has-in-halg-bg p-relative">
                    <div className="p-absolute half-bg-bottom w-100 d-sm-none h-50 bottom-0 left-0  v-light" />
                    <div className="dsn-container">
                        <BoxGallery col={2}>
                            <BoxGalleryItem
                                src="/img/esar/hang tags.jpg"
                                groupPopup="gallery"
                                caption={'Hang Tags'}
                            />
                            <BoxGalleryItem
                                src="/img/esar/Woven and Printed Labels.jpg"
                                groupPopup="gallery"
                                caption={'Woven and Printed Labels'}
                            />
                        </BoxGallery>
                    </div>
                </div>
                {/*End Gallery List*/}

                {/*Start Intro Project*/}
                <section className="text-center section-padding v-light">
                    <div className="container">
                        <div className="max-w750 ml-auto mr-auto">
                            <h4 className="title-block dsn-text mb-20 words splitting overflow-hidden">
                                We serve with our expert team & finest raw materials
                            </h4>
                            <p className="dsn-up">
                                We specialize in catering to, primarily but not only, apparel, footwear, and home textile industries, tailoring every solution to the brand identity and needs. Our dedicated team can create tailor-made trims to meet the unique branding and design requirements of our clients, ensuring that each accessory complements the overall look and feel of the product </p>
                        </div>
                    </div>
                </section>
                {/*End Intro Project*/}

                {/*Start Gallery List*/}
                <div className="mb-section has-in-halg-bg p-relative mt-sm-section">
                    <div className="p-absolute half-bg-bottom d-sm-none w-100 h-50 top-0 left-0  v-light" />
                    <div className="dsn-container">
                        <BoxGallery col={2}>
                            <BoxGalleryItem
                                src="/img/esar/Heat Transfer Label.png"
                                groupPopup="gallery"
                                caption={'Heat Transfer Label'}
                            />
                            <BoxGalleryItem
                                src="/img/esar/Care Labels.jpg"
                                groupPopup="gallery"
                                caption={'Care Labels'}
                            />
                        </BoxGallery>
                    </div>
                </div>
                {/*End Gallery List*/}

            </section>

            <section >
                <HeaderFull className="dsn-container"
                    alignItems="end"
                    heroContent={heroData} overlay={heroData?.overlay} />

                <section className=" section-padding v-light full-width  " >
                    {/*Start Intro Project*/}

                    {/*End Intro Project*/}


                    {/*Start Gallery List*/}
                    <BoxGallery className="section-margin container" col={2}>
                        <BoxGalleryItem
                            src='/img/esar/box1111.webp'
                            groupPopup="gallery"
                            caption={"Paper Based Packaging Box "}
                        />
                        <BoxGalleryItem
                            src="/img/esar/box1.webp"
                            groupPopup="gallery"
                            caption={"Paper Based Packaging Box"}
                        />
                    </BoxGallery>
                    {/*End Gallery List*/}

                    {/*Start Intro Project*/}
                    <section className="container section-margin text-center">
                        <div className="p-relative">
                            <h4 className="title-block dsn-text max-w570 ml-auto mr-auto mb-70 sm-mb-30">
                                Convey the perfect match for your brand's identity
                            </h4>

                            <Image className="w-100" alt={""} src={"/img/esar/box111 (2).png"} width={1200} height={700}
                                sizes="100vw" />
                            <p className="dsn-up mt-30 ml-auto mr-auto max-w570">
                                From concept to execution, we bring innovation and strategic design to the forefront, ensuring that our packaging solutions make a lasting impact in the competitive market landscape.
                            </p>
                        </div>
                    </section>
                    {/*End Intro Project*/}
                </section>
            </section>



            <section>
                {/*Start Parallax Img*/}
                <ParallaxImage
                    alt={""}
                    src={"/img/esar/ecoband-custom.avif"}
                    overlay={3}
                    caption="Belly Band & Photo Inlays"
                />
                {/*End Parallax Img*/}


                {/*Start Gallery List*/}
                <div className="section-padding v-light full-width">
                    <BoxGallery className="section-margin container" col={3}>
                        <BoxGalleryItem
                            src={"/img/esar/band1.jpg"}
                            groupPopup="gallery"
                            caption={'Belly Band & Photo Inlays'}
                        />
                        <BoxGalleryItem
                            src={"/img/esar/band2.jpg"}
                            groupPopup="gallery"
                            caption={'Belly Band & Photo Inlays'}
                        />
                        <BoxGalleryItem
                            src={"/img/esar/band4.jpg"}
                            groupPopup="gallery"
                            caption={'Belly Band & Photo Inlays'}
                        />
                    </BoxGallery>
                </div>
                {/*End Gallery List*/}

                {/*Start Parallax Img*/}
                <ParallaxImage
                    alt={""}
                    src={"/img/esar/tap1.jpg"}
                    caption="Self Adhesive Labels"
                />
                {/*End Parallax Img*/}

                {/*Start box vertical Section*/}
                <section className="box-gallery-vertical container section-margin">
                    <DsnGrid col={2} colGap={0}>
                        <div className="p-relative mb-lg-section">
                            <div className="box-im w-100 h-100 p-absolute">
                                <ParallaxImage
                                    alt={""}
                                    src={"/img/esar/tap3.png"}
                                    height="100%"
                                />
                            </div>
                        </div>
                        <div className="p-relative pt-lg-section">
                            <div className="box-info h-100 box-padding background-section ">
                                <TitleCover>Self </TitleCover>
                                <TitleSection
                                    className={"text-uppercase mb-30"}
                                    defaultSpace={false}
                                >
                                    Adhesive Labels
                                </TitleSection>

                                <p>
                                    Elevate your brand connection with our durable and removable self-adhesive label. These labels go beyond mere identification; they enable businesses to forge a more personal connection with customers.
                                </p>
                                <p className="mt-15">
                                    Our self-adhesive peel-off labels are designed to endure both high and cold temperatures, ensuring resilience in various applications. Whether your products face the heat of summer or the chill of winter, our labels remain steadfast, offering the best labeling solution for a range of scenarios.
                                </p>
                                {/* <Button href="#0" className="mt-30">
                                    View More <span className="icon">⟶</span>
                                </Button> */}
                            </div>
                        </div>
                    </DsnGrid>
                </section>
                {/*End box vertical Section*/}

            </section>

            {/*<!-- ========== box-gallery-vertical image left ========== */}
            <DsnGrid className="p-relative over-hidden v-light " col={2} colTablet={1} colGap={0} rowGap={0} data-dsn-title="Feature">
                <div className="box-img" >
                    <ParallaxImage alt="" src={"/img/esar/mission.webp"} height="100%" />
                </div>
                <div className="box-info box-padding background-section" >
                    <TitleSection className={"mb-50"} defaultSpace={false} description="Our Mission">
                        Our Mission is to revolutionize the packaging industry...
                    </TitleSection>
                    <p className="max-w570 dsn-up mb-10 ">Our Mission is to revolutionize the packaging industry by delivering cutting-edge, eco-friendly solutions that enhance brand value and reduce environmental impact.
                        <br />
                        We aim to be a catalyst for positive change, inspiring businesses to adopt sustainable packaging practices</p>


                    <div className="border-bottom mt-30 mb-30" />
                    <List className="pb-30 border-bottom" col={1} rowGap={30}>
                        <ListItem number="1" headingTag="span" headingTitle="sm-title-block">
                            <span style={{ fontWeight: 'bold' }}>
                                Customized Solution:</span> Tailored trims & packaging solutions to meet the unique requirements of different product types, sizes, and brands.
                        </ListItem>
                        <ListItem number="2" headingTag="span" headingTitle="sm-title-block">
                            <span style={{ fontWeight: 'bold' }}>
                                Eco-Friendly Materials:</span> Utilizing recyclable and biodegradable materials to contribute to a more sustainable and responsible industry.
                        </ListItem>
                        <ListItem number="3" headingTag="span" headingTitle="sm-title-block">
                            <span style={{ fontWeight: 'bold' }}>Innovative Designs:</span>  Incorporating the latest design trends and technologies to create packaging that stands out on the shelves and resonates with consumers.
                        </ListItem>
                    </List>
                    <Button href={"/about"} className="background-theme mt-30" borderStyle={false} borderRadius>
                        View More <span className="icon">⟶</span>
                    </Button>
                </div>
            </DsnGrid>
            {/*<!-- ========== End box-gallery-vertical image left ========== */}

            {/*<!-- ========== box-gallery-vertical image right ========== */}
            <DsnGrid className="p-relative over-hidden" col={2} colTablet={1} colGap={0} rowGap={0}>
                <div className="box-info box-padding background-section order-md-2">
                    <TitleSection className={"mb-50"} defaultSpace={false} description="Our Vision">
                        Our Vision is to be the preferred partner for global brand...
                    </TitleSection>

                    <p className="max-w570 dsn-up">Our Vision is to be the preferred partner for global brand, setting the standard for sustainable and stylish packaging that adds value to their brand identity.</p>

                    <div className="border-bottom mt-30 mb-30" />
                    <Accordion className={"pb-30 border-bottom"}>
                        <AccordionItem title="Sustainable and stylish Solution" active number={1}>
                            <p>
                                We’ve created a full-stack structure for our working
                                workflow processes, were from the funny the century initial all the made, have spare to
                                negatives.
                            </p>
                        </AccordionItem>
                        <AccordionItem title="User Experience" number={2}>
                            <p>
                                We’ve created a full-stack structure for our working
                                workflow processes, were from the funny the century initial all the made, have spare to
                                negatives.
                            </p>
                        </AccordionItem>

                    </Accordion>
                    {/* <Button href={"/services"} className="background-theme mt-30" borderStyle={false} borderRadius>
                        View More <span className="icon">⟶</span>
                    </Button> */}
                </div>
                <div className="box-img order-md-1">
                    <ParallaxImage alt="" src={"/img/esar/vision.jpg"} height="100%" />
                </div>

            </DsnGrid>
            {/*<!-- ========== End box-gallery-vertical image Right ========== */}



            {/*========== Next Page ==========*/}
            <NextPage className="section-padding border-top background-section" />
            {/*========== End Next Page ==========*/}

            {/*========== Footer ==========*/}
            <Footer className="background-section" />
            {/*========== End Footer ==========*/}

        </Layout >


    )
}

export default Corporate;



