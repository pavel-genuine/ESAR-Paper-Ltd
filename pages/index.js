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
import DsnLink from "../hooks/DsnLink";
import Link from "next/link";

const dataSlider = [
    {
        id: 5,
        title: `Perfect Match <br/> For Your Brand `,
        href: {
            href: "#0",
            target: "_blank",
            rel: "nofollow"
        },
        buttonText: "ESAR Paper Industries Limited",
        src: '/img/esar/Hang Tags (1).jpg',
        subtitle: `We've a design team that believe in the ideas`,
        overlay: 6
    },
    {
        id: 1,
        title: ` Extensive <br/> Product Range `,
        href: {
            href: "#0",
            target: "_blank",
            rel: "nofollow"
        },
        buttonText: "ESAR Paper Industries Limited",
        subtitle: `Finest material sourcing all over the world`,
        src: '/img/esar/box.avif',
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
        subtitle: `Final outputs will amaze you`,
        src: '/img/esar/buttons.webp',
        overlay: 6,

    },
    {
        id: 3,
        title: `FSC™ Certified <br/> Materials`,

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
        title: `Elevates <br/> Visual Allure`,
        href: {
            href: "#0",
            target: "_blank",
            rel: "nofollow"
        },
        buttonText: "ESAR Paper Industries Limited",
        src: '/img/esar/Belly Band & Photo Inlays.jpg',
        subtitle: `Execution is the key to our success`,
        overlay: 6
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
        subtitle: `we believe in our expart teams & partners`,
        src: '/img/esar/ecoband-custom.avif',
        overlay: 6,

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
                data-dsn-title="Products"
            />




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



