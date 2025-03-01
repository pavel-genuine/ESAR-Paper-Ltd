import React from "react";
import HeaderNormal from "../components/header/HeaderNormal";
import Layout from "../layout/Layout";
import NextPage from "../components/next/NextPage";
import Portfolio from "../components/portfolio/Portfolio";
import ModalContact from "../components/model-right/ModalContact";
import Footer from "../components/footer/Footer";
import Head from "next/head";


function Work() {


    return (
        <Layout className='v-light' modelRight={{ children: <ModalContact />, propsModal: { textBtn: "Contact" } }}>
            <Head>
                <title>Portfolio  | Eremia Creative Portfolio Multi-Purpose</title>
            </Head>

            {/*========== Header Normal ========== */}
            <HeaderNormal backgroundColor="" className="text-center">
                <p className="subtitle p-relative line-shape  dsn-load-animate">
                    <span className="pl-10 pr-10 background-main">Finest Solutions</span>
                </p>
                <h1 className="title text-uppercase">
                    OUR PRODUCTS SOLUTIONS
                </h1>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}
            <section className="v-light full-width">

                <div className="container pb-70 pt-70">
                    <Portfolio stylePortfolio={"work-classic"}
                        useFilter
                        styleBox={"line"}
                        col={2} colGap={50} rowGap={80}
                    />
                </div>
            </section>

            {/*========== Start Next Page Section ==========*/}
            <NextPage className={` section-padding`} />
            {/*========== End Next Page Section ==========*/}
            {/*========== Footer ==========*/}
            <Footer className="" />
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default Work;
