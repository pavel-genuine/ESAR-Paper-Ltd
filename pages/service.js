import Layout from "../layout/Layout";
import HeaderNormal from "../components/header/HeaderNormal";
import DsnGrid from "../layout/DsnGrid";
import TitleSection from "../components/heading/TitleSection";
import BgDot from "../components/header/BgDot";
import Facts from "../components/facts/Facts";
import TitleCover from "../components/heading/TitleCover";
import List from "../components/list/List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { ServiceGrid } from "../components/services/Service";
import { IdeaIcon } from "../components/svg";
import ButtonProject from "../components/button/ButtonProject";
import { getServiceData } from "../data/service";
import Team from "../components/Team/Team";
import React from "react";
import { getTeamData } from "../data/team";
import Image from "next/image";
import NextPage from "../components/next/NextPage";
import Footer from "../components/footer/Footer";
import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";

function Service() {

    TitleSection.defaultProps = {
        classDesInner: "line-bg-left",
    };
    return (
        <Layout modelRight={{ children: <ModalContact />, propsModal: { textBtn: "Contact" } }}>
            <Head>
                <title>Service  | ESAR Paper Industries Ltd</title>
            </Head>
            {/*========== Header Normal ========== */}
            <HeaderNormal backgroundColor="background-section" className="text-center">
                <p className="subtitle p-relative line-shape   mb-30">
                    <span className="pl-10 pr-10 background-main">OUR SERVICES</span>
                </p>
                <h1 className="title">

                    We are providing complete study abroad solution <br />
                    all over the world for you.
                </h1>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}

            {/*========== About Section  ==========*/}
            <DsnGrid className="container section-margin" customGrid={{ desktop: "70% 30%" }} rowGapTablet={50} data-dsn-title="What We Do">
                <div className="box-left">
                    <TitleSection defaultSpace={false} description="What We Do" />
                    <h4 className="mt-25">
                        Your gateway to endless opportunities <br /> for studying abroad.
                    </h4>
                </div>
                <div className="box-right">
                    <TitleSection defaultSpace={false} description="Our Services" />
                    <ul className="mt-25">
                        <li className="mb-15">Student Consultancy</li>
                        <li className="mb-15">Admission</li>
                        <li className="mb-15">Visa Process</li>
                    </ul>

                </div>
            </DsnGrid>
            {/*========== End About Section  ==========*/}

            {/*<!-- ========== facts-section ==========*/}
            <div className="section-margin p-relative" >
                <BgDot />
                <BgDot rightPosition />
                <div className="container">
                    <Facts className="text-center" col={4} colTablet={2} />
                </div>
            </div>
            {/*<!-- ========== end facts-section ========== */}


            {/*<!-- ========== About section ========== */}
            <div className="p-relative background-section section-padding" data-dsn-title="products better">
                <DsnGrid className="container" col={2} colTablet={1}>
                    <div className="p-relative box-left">
                        <div className="box-im h-100 ">
                            <Image className="cover-bg-img " src="/img/rachel-claire.jpg" alt="" fill sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw" />
                        </div>
                    </div>

                    <div className="p-relative box-right">
                        <TitleCover>Diesel</TitleCover>
                        <TitleSection className="mb-30" description="Build your own career" defaultSpace={false}>
                            Ensure better education ensure better future
                        </TitleSection>
                        <List className="border-top  pt-30 mb-30" col={2} iconSize={"15px"}>
                            <List.item icon={<FontAwesomeIcon icon={faCheckCircle} className="theme-color" />}
                                headingTag="span"> Proin gravida nibh vel </List.item>
                            <List.item icon={<FontAwesomeIcon icon={faCheckCircle} className="theme-color" />}
                                headingTag="span"> Proin gravida nibh vel </List.item>
                            <List.item icon={<FontAwesomeIcon icon={faCheckCircle} className="theme-color" />}
                                headingTag="span"> Auctor aliquet aenean quis </List.item>
                            <List.item icon={<FontAwesomeIcon icon={faCheckCircle} className="theme-color" />}
                                headingTag="span"> Auctor aliquet aenean quis </List.item>
                        </List>
                        <ServiceGrid className="icon-left p-0 border-top  pt-30 align-items-center"

                            iconOption={{ className: "background-main p-15 align-self-center" }}
                            data={[{
                                icon: IdeaIcon,
                                title: "Best support from Industry Experts ",
                                description: "We’ve designed a culture that allows our stewards to assimilate with our clients and bring."
                            }]} />

                    </div>
                </DsnGrid>
            </div>
            {/*<!-- ========== End About section ========== */}


            {/*<!-- ========== About section ========== */}
            <div className="p-relative section-margin" data-dsn-title="STUDENT CONSULTING">
                <DsnGrid className="container" col={2} colTablet={1}>
                    <div className="p-relative box-left order-md-2">
                        <TitleCover>ESAR</TitleCover>
                        <TitleSection className="mb-30" description="Some Feature" defaultSpace={false}>
                            STUDENT CONSULTING
                        </TitleSection>
                        <p className="max-w570 dsn-up mb-10 border-top pt-30">
                            Founded in 2018, Study Hive has become one of the best Student Consulation agency in
                            in the region.
                        </p>
                        <p className="max-w570 dsn-up border-bottom pb-30">
                            Embarking on a journey to study in a foreign land is a transformative experience like no other. It's a chance to broaden your horizons, immerse yourself in new cultures, and gain invaluable skills that will shape your future. At STUDY HIVE, we understand the excitement and challenges that come with studying abroad.
                        </p>
                        {/* <ButtonProject href="#0" className="mt-30"> Visit Website </ButtonProject> */}

                    </div>
                    <div className="p-relative box-right order-md-1">
                        <div className="box-im h-100 ">
                            <Image className="cover-bg-img " src="/img/help-project.jpg" alt="" fill sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw" />
                        </div>
                    </div>


                </DsnGrid>
            </div>
            {/*<!-- ========== End About section ========== */}


            {/*<!-- ========== About section ========== */}
            <div className="p-relative background-section section-padding" data-dsn-title="Study Manager">

                <div className="container">
                    <TitleSection className="text-center" description="Most valued" defaultSpace={false}>
                        Admission & Visa Process
                    </TitleSection>
                    <TitleSection className="text-center mt-15" tag="p" dirDescription="after" classDesInner="max-w570"
                        description="Get Essentials today and start building world-class career,
                              create awesome path with unlimited possibilities."/>


                    <DsnGrid className="background-main" col={2} colTablet={1} rowGapTablet={0} rowGapMobile={0}>
                        <div className="p-relative box-padding box-left order-md-2">
                            <TitleCover>ESAR</TitleCover>
                            <TitleSection className="mb-15" defaultSpace={false} description="Study Manager" />
                            <h4 className="mb-50">Get connected today and start building
                                world-class career!</h4>
                            <ServiceGrid className="icon-left p-0" rowGapTablet={30} rowGapMobile={30}
                                data={[
                                    {
                                        icon: <Image src="/img/team/1.jpg" alt="" width={70} height={70} />,
                                        title: "Build powerful path with Essentials",
                                        description: `Start building
                                world-class career. `
                                    }, {
                                        icon: <Image src="/img/team/2.jpg" alt="" width={70} height={70} />,
                                        title: "Build powerful plan with Essentials",
                                        description: `Start building
                                world-class career.`
                                    }, {
                                        icon: <Image src="/img/team/3.jpg" alt="" width={70} height={70} />,
                                        title: "Get powerful support with Essentials",
                                        description: `Start building
                                world-class career. `
                                    }
                                ]}
                            />
                        </div>
                        <div className="p-relative box-right order-md-1">
                            <div className="box-im h-100 ">
                                <Image className="cover-bg-img " src="/img/corporate.jpg" alt="" fill sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw" />
                            </div>
                        </div>
                    </DsnGrid>
                    <ServiceGrid className="mt-50 p-0 text-center" data={getServiceData().slice(0, 3)} col={3} colTablet={2}
                        colGap={50} />
                </div>


            </div>
            {/*<!-- ========== End About section ========== */}

            {/*========== team Section ========== */}
            <section className="container section-margin " data-dsn-title="Best Team Ever">
                <TitleSection description={"Our Team"}>
                    The Best Team Ever!
                </TitleSection>

                <Team data={getTeamData().slice(0, 3)} className={"team-classic"} col={3} colTablet={2} />
            </section>
            {/*========== End team Section ========== */}

            {/*========== Next Page ==========*/}
            <NextPage className="section-padding border-top background-section" />
            {/*========== End Next Page ==========*/}

            {/*========== Footer ==========*/}
            <Footer className="background-section" />
            {/*========== End Footer ==========*/}

        </Layout>
    )
        ;
}


export default Service;
