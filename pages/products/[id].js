'use client';
import Layout from "../../layout/Layout";
import TitleSection from "../../components/heading/TitleSection";
import ParallaxImage from "../../components/Image/ParallaxImage";

import Footer from "../../components/footer/Footer";
import ModalContact from "../../components/model-right/ModalContact";
import HeaderNormal from "../../components/header/HeaderNormal";

import MetaPost from "../../components/meta/MetaPost";
import ButtonPopup from "../../components/button-popup/ButtonPopup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import CommentForm from "../../components/bolg/CommentForm";
import Link from "next/link";
import Head from "next/head";
import { data } from "../../data/portfolio.js"

function Home() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };
    const [productData, setProductData] = useState({})

    const queryParameters = new URLSearchParams(window.location.search)
    const productId = queryParameters.get('id');
    ;


    useEffect(() => {

        const product = data?.find(d => d?.id == productId)

        setProductData(product)
        console.log(product)
    }, [productId])




    return (
        <Layout modelRight={{ children: <ModalContact />, propsModal: { textBtn: "Contact" } }}>
            <Head>

                <title> Product : {productData?.title}  | ESAR Paper Industries Ltd</title>
            </Head>

            {/*========== Header Normal ========== */}
            <HeaderNormal container={"container"}>
                <MetaPost category={productData?.category} />
                <h1 className="title text-uppercase">
                    {productData?.title}
                </h1>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}

            {/*Start Parallax Img*/}
            <ParallaxImage alt={""} src={`${productData?.src}`} height={"80vh"}
                parallaxFrom={{ scale: 1.3 }} parallax={{ scale: 1 }}
                overlay={5} />
            {/*End Parallax Img*/}

            <div className="news-content mb-section mt-40">
                <div className="single-post container post-content  ">

                    {productData?.requirementsFor && <h3>Student’s Eligibility and Application requirements : </h3>}
                    <p style={{ fontWeight: 'bold' }}>{productData?.requirementsFor}</p>


                    {productData?.des1 ? <blockquote className="block-quote">
                        <p>{
                            productData?.des1}
                        </p>

                    </blockquote> : ""}

                    {productData?.des2 ?
                        <blockquote className="block-quote">
                            <p>{
                                productData?.des2}
                            </p>

                        </blockquote>
                        : ''}




                    {/*Start Box Info Center Content*/}
                    <div className="p-relative v-dark-head text-center">
                        <ParallaxImage src="/img/blog/2.jpg" overlay={4} height={"80vh"} alt={""} />
                        <div className="v-middle z-index-1">
                            <ButtonPopup href="//media.w3.org/2010/05/sintel/trailer.mp4" />
                        </div>
                    </div>
                    {/*End Box Info Center Content*/}

                    {productData?.des3 ?
                        <blockquote className="block-quote">
                            <p>{
                                productData?.des3}
                            </p>

                        </blockquote>
                        : ''}
                    {productData?.des4 ?
                        <blockquote className="block-quote">
                            <p>{
                                productData?.des4}
                            </p>

                        </blockquote>
                        : ''}



                </div>


            </div>



            {/*========== Footer ==========*/}
            <Footer className="background-section" />
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default Home;
