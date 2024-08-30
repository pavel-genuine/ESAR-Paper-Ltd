import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeaderNormal from "../components/header/HeaderNormal";
import TitleSection from "../components/heading/TitleSection";
import ParallaxImage from "../components/Image/ParallaxImage";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import List, { ListItem } from "../components/list/List";
import DsnGrid from "../layout/DsnGrid";
import Layout from "../layout/Layout";
import BoxGallery, {
    BoxGalleryItem,
} from "../components/box-gallery/BoxGallery";
import Team from "../components/Team/Team";
import Testimonial from "../components/testimonial/Testimonial";
import SwiperPagination from "../components/swiper-pagination/SwiperPagination";
import NextPage from "../components/next/NextPage";
import BrandClient from "../components/brand-client/BrandClient";
import Awards from "../components/awards/Awards";
import { getTeamData } from "../data/team";
import Service from "../components/services/Service";
import { getServiceData } from "../data/service";
import Image from "next/image";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";
import Button from "../components/button/Button";
import Accordion, { AccordionItem } from "../components/accordion/Accordion";

function About() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };


    return (
        <Layout className='v-light' modelRight={{ children: <ModalContact />, propsModal: { textBtn: "Contact" } }}>
            <Head>
                <title>About Us | ESAR Paper Industries Ltd</title>
            </Head>
            {/*========== Header Normal ========== */}
            <HeaderNormal className="">
                <p className="title p-relative line-shape line-shape-after mb-30">
                    <span className="pl-10 pr-10 background-section">ESAR Paper Industries Ltd </span>
                </p>
                <TitleSection className=" text-uppercase">
                    One stop solution for <br /> apparel Trims & Packaging <br /> products and services.
                </TitleSection>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}

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


            <DsnGrid className="p-relative over-hidden v-light " col={2} colTablet={1} colGap={0} rowGap={0} data-dsn-title="Feature">
                <div className="box-img" >
                    <ParallaxImage alt="" src={"/img/esar/Quality Assurance.jpg"} height="100%" />
                </div>
                <div className="box-info box-padding background-section" >
                    <TitleSection className={"mb-50"} defaultSpace={false} description="Quality Assurance">
                        Our commitment to quality is unwavering
                    </TitleSection>
                    <p className="max-w570 dsn-up mb-10 ">Our commitment to quality is unwavering. We adhere to stringent quality control measures throughout the production process,
                        <br />
                        ensuring that our packaging solutions not only meet but exceed industry standards.</p>


                    <div className="border-bottom mt-30 mb-30" />


                </div>
            </DsnGrid>

            <DsnGrid className="p-relative over-hidden" col={2} colTablet={1} colGap={0} rowGap={0}>
                <div className="box-info box-padding background-section order-md-2">
                    <TitleSection className={"mb-50"} defaultSpace={false} description="Environmental Responsibility">
                        Environmental Responsibility                    </TitleSection>

                    <p className="max-w570 dsn-up">
                        ESAR Paper Industries Ltd is dedicated to minimizing our ecological footprint.
                        <br />
                        We actively seek eco-friendly materials and production processes, promoting sustainability throughout our value chain.</p>

                    <div className="border-bottom mt-30 mb-30" />

                    {/* <Button href={"/services"} className="background-theme mt-30" borderStyle={false} borderRadius>
                        View More <span className="icon">⟶</span>
                    </Button> */}
                </div>
                <div className="box-img order-md-1">
                    <ParallaxImage alt="" src={"/img/esar/Environmental Responsibility.jpg"} height="100%" />
                </div>

            </DsnGrid>

            <NextPage className={`background-section section-padding`} />
            {/*========== End Next Page Section ==========*/}
        </Layout>
    );
}

export default About;
