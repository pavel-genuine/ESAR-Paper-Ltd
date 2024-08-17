import React from "react";
import styled from "styled-components";
import brandLight from "./logo.png";
import brandDark from "./logo.png";
import Image from "next/image";

const MainBrand = styled.div`
  img {
    width: ${(props) => props.width};
    max-width: 100%;
    height: ${(props) => props.height};
  }
  .v-light &,
  & {
    .logo-dark {
      display: block;
    }
    .logo-light {
      display: none;
    }
  }

  .v-dark & {
    .logo-dark {
      display: none;
    }
    .logo-light {
      display: block;
    }
  }
`;

const Logo = ({ width, height, alt }) => {
  return (
    <MainBrand className="main-brand" width={width} height={height}>
      <Image
        style={{ padding: "4px" }}
        className="logo-light"
        src={"./img/logo.png"}
        alt={` logo light`}
        width={320}
        height={84}
        // style={{ position: "absolute", left: "500%" }}
      />
      <Image
        className="logo-dark"
        src={"./img/logo.png"}
        alt={` logo dark`}
        width={320}
        height={84}
      />
    </MainBrand>
  );
};

MainBrand.defaultProps = { width: "80px", height: "auto" };
Logo.defaultProps = { alt: "ESAR" };

export default React.memo(Logo);
