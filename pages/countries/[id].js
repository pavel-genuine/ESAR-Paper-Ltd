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
import { data } from "../../data/blog.js"

function Home() {
    TitleSection.defaultProps = {
        classDesc: "line-shape line-shape-before",
        classDesInner: "line-bg-right",
    };
    const [countryData, setCountryData] = useState({})


    useEffect(() => {
        if (typeof window !== "undefined") {
            const queryParameters = new URLSearchParams(window.location.search)
            const countryId = queryParameters.get('id');

            const country = data?.find(d => d?.id == countryId)

            setCountryData(country)
        }
    }, [])




    return (
        <Layout modelRight={{ children: <ModalContact />, propsModal: { textBtn: "Contact" } }}>
            <Head>

                <title> Country : {countryData?.title}  | ESAR Paper Industries Ltd</title>
            </Head>

            {/*========== Header Normal ========== */}
            <HeaderNormal container={"container"}>
                <MetaPost category={countryData?.category} />
                <h1 className="title text-uppercase">
                    {countryData?.title}
                </h1>
            </HeaderNormal>
            {/*========== End Header Normal ==========*/}

            {/*Start Parallax Img*/}
            <ParallaxImage alt={""} src={`${countryData?.src}`} height={"80vh"}
                parallaxFrom={{ scale: 1.3 }} parallax={{ scale: 1 }}
                overlay={5} />
            {/*End Parallax Img*/}

            <div className="news-content mb-section mt-40">
                <div className="single-post container post-content  ">

                    {countryData?.requirementsFor && <h3>Student’s Eligibility and Application requirements : </h3>}
                    <p style={{ fontWeight: 'bold' }}>{countryData?.requirementsFor}</p>


                    {countryData?.documents?.length ? <blockquote className="block-quote">
                        <p>
                            {countryData?.documents?.length && <p style={{ fontWeight: 'bold' }}>Academic Documents : </p>}
                            {countryData?.documents?.map((doc, i) => <p key={i} style={{ marginTop: '8px' }}><span>{'\u2B24'} </span> - <span>{doc}</span></p>)}
                            <p style={{ fontWeight: 'bold', marginTop: '15px' }}>Study gap acceptance  : </p>
                            <p style={{ marginTop: '8px' }}> <span>{'\u2B24'} </span> - {countryData?.studyGap}</p>
                            <p style={{ fontWeight: 'bold', marginTop: '15px' }}>Funding  : </p>
                            <p style={{ marginTop: '8px' }}> <span>{'\u2B24'} </span> - {countryData?.funding}</p>
                        </p>

                    </blockquote> : ""}

                    {countryData?.accommodationCost ?
                        <blockquote className="block-quote">
                            <p>
                                {countryData?.accommodationCost && <p style={{ fontWeight: 'bold' }}> Accommodation Cost per Year: </p>}

                                <p style={{ marginTop: '8px' }}> <span>{'\u2B24'} </span> - {countryData?.accommodationCost}</p>
                            </p>

                        </blockquote>
                        : ''}


                    {countryData?.tuitionFee?.length ? <blockquote className="block-quote">
                        <p>
                            {countryData?.tuitionFee?.length && <p style={{ fontWeight: 'bold' }}>Tuition Fee: : </p>}
                            {countryData?.tuitionFee?.map((doc, i) => <p key={i} style={{ marginTop: '8px' }}><span>{'\u2B24'} </span> - <span>{doc}</span></p>)}
                        </p>

                    </blockquote> : ''}

                    {countryData?.availableIntakes?.length ? <blockquote className="block-quote">
                        <p>
                            {countryData?.availableIntakes?.length && <p style={{ fontWeight: 'bold' }}>Available Intakes: </p>}
                            {countryData?.availableIntakes?.map((doc, i) => <p key={i} style={{ marginTop: '8px' }}><span>{'\u2B24'} </span> - <span>{doc}</span></p>)}
                        </p>

                    </blockquote> : ''}

                    {/*Start Box Info Center Content*/}
                    <div className="p-relative v-dark-head text-center">
                        <ParallaxImage src="/img/blog/2.jpg" overlay={4} height={"80vh"} alt={""} />
                        <div className="v-middle z-index-1">
                            <ButtonPopup href="//media.w3.org/2010/05/sintel/trailer.mp4" />
                        </div>
                    </div>
                    {/*End Box Info Center Content*/}

                    {countryData?.breakdown?.length && <h3>Steps of procedure and cost breakdown : </h3>}
                    {countryData?.breakdown?.length ? <blockquote className="block-quote">
                        <p>
                            {/* <p style={{ fontWeight: 'bold' }}>Academic Documents : </p> */}
                            {countryData?.breakdown?.map((doc, i) => <p key={i} style={{ marginTop: '8px' }}><span>{doc}</span></p>)}
                        </p>

                    </blockquote> : ''}
                    {countryData?.checklist?.length && <h3>Important checklist  : </h3>}
                    {countryData?.checklist?.length ? <blockquote className="block-quote">
                        <p>
                            {/* <p style={{ fontWeight: 'bold' }}>Academic Documents : </p> */}
                            {countryData?.checklist?.map((doc, i) => <p key={i} style={{ marginTop: '8px' }}><span>{doc}</span></p>)}
                        </p>

                    </blockquote> : ''}


                    {/*<CommentForm className="mt-section"/>*/}

                    {/* <div className="post-tags p-relative heading-color font-heading">
                        <a href="#0" title="View All Posts in Tag " rel="tag">
                            <span className="post_tag post_tag">Creative</span>
                        </a>
                        <a href="#0" title="View All Posts in Tag " rel="tag">
                            <span className="post_tag post_tag">Design</span>
                        </a>
                    </div> */}
                </div>


            </div>

            <div className="pagination-post d-flex align-items-center border-style border-radius section-margin container background-section">
                {/* 
                <div className="pagination-item w-100 p-20">
                    <Link >
                        <span className="mb-5">PREVIOUS</span>
                        <h4 className="title-block word-wrap">Why a public figure</h4>
                    </Link>
                </div>

                <div className="icon p-20 border-right border-left">
                    <a className="h-100 heading-color" href="#">
                        <FontAwesomeIcon icon={faThLarge} />
                    </a>
                </div>
                <div className="pagination-item w-100 p-20 text-right">
                    <Link href="single-blog" >
                        <span className="mb-5">NEXT</span>
                        <h4 className="title-block word-wrap">Newly-launched campaign</h4>
                    </Link>
                </div> */}
            </div>

            {/* <CommentForm className="container" /> */}


            {/*========== Footer ==========*/}
            <Footer className="background-section" />
            {/*========== End Footer ==========*/}
        </Layout>
    );
}

export default Home;
