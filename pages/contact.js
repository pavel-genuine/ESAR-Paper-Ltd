import React from "react";
import HeaderNormal from "../components/header/HeaderNormal";
import TitleSection from "../components/heading/TitleSection";
import Layout from "../layout/Layout";

import Map from "../components/Map/Map";
import DsnGrid from "../layout/DsnGrid";
import InfoBox from "../components/contact/InfoBox";
import ContactForm from "../components/contact/ContactForm";
import NextPage2 from "../components/next/NextPage2";
import Footer from "../components/footer/Footer";
import Head from "next/head";

function About() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };

    return (
        <Layout className='v-light'>
            <Head>
                <title>Contact Us | ESAR Paper Industries Ltd</title>
            </Head>
            <section >
                {/*========== Header Normal ========== */}
                <HeaderNormal className="text-center">
                    <p className="title p-relative line-shape">
                        <span style={{ color: '#8b6948' }} className="pl-10 pr-10 background-section">ESAR Paper Industries Ltd</span>
                    </p>
                    {/* <TitleSection className="title text-uppercase">
                        Look around you<br /> everything is changing.
                    </TitleSection>
                    <p className="dsn-heading-title mt-15 max-w570">What if the time has come for you to
                        change?
                        Starting a collaboration is easy! Order a free consultation or call back. We are always in touch and
                        happy to cooperate with you
                    </p> */}
                </HeaderNormal>
                {/*========== End Header Normal ==========*/}



                {/*Start Contact Form && Info Box*/}
                <div className="section-margin container">
                    <DsnGrid col={2} colTablet={1}>

                        <InfoBox className="align-self-center" />
                    </DsnGrid>
                </div>

                {/*Start Map*/}
                <Map
                    mapKey="AIzaSyDMyAS2jdzj-vdgBIFaIStYOWJtSlghndg"
                    zoom={10}
                    height="80vh"
                    defaultCenter={{ lat: 23.8639978, lng: 90.3909213 }}
                />



            </section>

            {/*========== Start Next Page Section ==========*/}
            <NextPage2 className={` section-padding`} />
            {/*========== End Next Page Section ==========*/}

            {/*========== Footer ==========*/}
            <Footer className="" />
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default About;
