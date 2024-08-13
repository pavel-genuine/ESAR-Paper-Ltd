import { Swiper, SwiperSlide } from "swiper/react";

import {
  Pagination,
  Parallax,
  SwiperOptions,
  Autoplay,
  Navigation,
} from "swiper";

import BlogItem from "./BlogItem";
import { getBlogData } from "../../data/blog";
import { dsnCN } from "../../hooks/helper";
import { ParallaxOption } from "../../type/DsnSwiper";
import { MetaData } from "../../hooks/EremiaType";
import { ReactChild } from "react";

export interface PortfolioSwiperProps extends SwiperOptions {
  desktop?: {} | SwiperOptions;
  mobile?: {} | SwiperOptions;
  tablet?: {} | SwiperOptions;
  className?: string;
  parallaxImage?: Object | ParallaxOption;
  parallaxContent?: Object | ParallaxOption;
  blur?: boolean;
  hideMetaData?: MetaData;
  children?: ReactChild | ReactChild[];
}

function BlogSwiper({
  desktop,
  mobile,
  tablet,
  className,
  blur,
  parallaxImage,
  parallaxContent,
  hideMetaData,

  children,
  ...restProps
}: PortfolioSwiperProps) {
  const dataPortfolio = getBlogData();

  return (
    <Swiper
      modules={[Pagination, Parallax, Autoplay, Navigation]}
      pagination={{ clickable: true, el: ".swiper-pagination" }}
      navigation={{
        nextEl: ".image-swiper-button-next",
        prevEl: ".image-swiper-button-prev",
        disabledClass: "swiper-button-disabled",
      }}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 2000,
      }}
      breakpoints={{
        992: desktop,
        768: tablet,
        576: mobile,
      }}
      className={dsnCN("our-blog", className, blur && "has-blur")}
      {...restProps}
    >
      {dataPortfolio.map((item, index) => (
        <SwiperSlide key={index}>
          <BlogItem
            portoDetails={item}
            textButton="Load More"
            parallaxImage={parallaxImage}
            metaData={hideMetaData}
            parallaxContent={parallaxContent}
          />
        </SwiperSlide>
      ))}

      {children}
    </Swiper>
  );
}

BlogSwiper.defaultProps = {
  desktop: {
    slidesPerView: 3,
  },
  tablet: {
    slidesPerView: 2,
  },
  mobile: {
    slidesPerView: 2,
  },
};

export default BlogSwiper;
