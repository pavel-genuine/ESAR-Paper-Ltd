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
import BoxGallery, {
    BoxGalleryItem,
} from "../../components/box-gallery/BoxGallery";
import Image from "next/image";
import NextPage from "../../components/next/NextPage.jsx";

function Home() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };
    const [productData, setProductData] = useState({})

    useEffect(() => {
        if (typeof window !== "undefined") {
            const queryParameters = new URLSearchParams(window.location.search)
            const productId = queryParameters.get('id');

            const product = data?.find(d => d?.id == productId)

            setProductData(product)
        }
    }, [typeof window !== "undefined" && window.location.search])


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

            <div className="news-content  pt-40 pb-40 v-light">
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
                    <div className="container p-relative">
                        <Image className="w-100" alt={""}
                            src={productData?.img1}
                            width={1400} height={688} sizes="(max-width: 768px) 100vw,(max-width: 1200px) 75vw,100vw" />
                    </div>
                    {/*End Img*/}

                    {/*Start Gallery List*/}
                    <BoxGallery className="section-margin container" col={2}>
                        <BoxGalleryItem
                            src={productData?.img2}
                            groupPopup="gallery"
                        />
                        <BoxGalleryItem
                            src={productData?.img3}
                            groupPopup="gallery"
                        />
                    </BoxGallery>
                    {/*End Gallery List*/}
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

            <NextPage className={`background-section section-padding`} />

            {/*========== Footer ==========*/}
            <Footer className="background-section" />
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default Home;
