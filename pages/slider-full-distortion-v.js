import React from "react";
import Layout from "../layout/Layout";
import SliderPortfolio from "../components/slider-portfolio/SliderPortfolio";

import ModalContact from "../components/model-right/ModalContact";
import Head from "next/head";

function Home() {


    return (
        <Layout modelRight={{ children: <ModalContact />, propsModal: { textBtn: "Contact" } }}>
            <Head>
                <title>Portfolio  | Eremia Creative Portfolio Multi-Purpose</title>
            </Head>
            <SliderPortfolio
                webgel
                fullWidth
                className={"align-items-center justify-content-center pb-80 text-center"}
                webgelOptions={{
                    displacement: "/img/displacement/8.jpg",
                    speedIn: 3.5,
                }}
                optionSlider={{
                    direction: "vertical"
                }}
                metaData={{ separateCat: null }}
                tag="header"
            />
        </Layout>
    );
}

export default Home;
