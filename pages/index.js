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
        src: '/img/esar/perfecf.jpg',
        // subtitle: `We've a design team that believe in the ideas`,
        overlay: 4
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
        // subtitle: `Finest material sourcing all over the world`,
        src: '/img/esar/2. Extensive Product Range 1.jpeg',
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
        src: '/img/esar/3. FSC Certified Materials.png',
        subtitle: ``,
        overlay: 6,

    },

    {
        id: 2,
        title: `GRS Certified <br/> Recycled Materials`,
        href: {
            href: "#0",
            target: "_blank",
            rel: "nofollow"
        },
        buttonText: "ESAR Paper Industries Limited",
        // subtitle: `we believe in our expart teams & partners`,
        src: '/img/esar/4. GRS Certified Recycled Materials.jpg',
        overlay: 4,

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
        <Layout className='v-light' modelRight={{ children: <ModalContact />, propsModal: { textBtn: "Contact" } }}>

            <Head>
                <title>ESAR Paper Industries Ltd </title>
            </Head>
            <div data-dsn-title="Banner">

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



