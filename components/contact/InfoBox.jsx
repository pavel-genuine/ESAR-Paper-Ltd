import React from "react";
import { dsnCN } from "../../hooks/helper";

function InfoBox({ className }) {
  return (
    <div className={dsnCN("box-info-contact", className)}>
      <ul style={{}}>
        <li>
          <h5 className="title-block ">Contact</h5>

          <div className="over-hidden mt-20">
            <h5 className="sm-title-block mb-10">Mail</h5>
            <a
              className="link-hover"
              data-hover-text="info@esar.industries"
              href="mailto:info@esar.industries"
            >
              info@esar.industries
            </a>
          </div>
        </li>
        <li>
          <h5 className="sm-title-block mb-10">Address</h5>
          <p className="text-">
            <span style={{ fontWeight: "bold" }}>Office : </span> House: 11,
            Road: 1/B, Sector: 05, Uttara, Dhaka-1230, Bangladesh.
          </p>
          <br />
          <p className="text-p">
            <span style={{ fontWeight: "bold" }}>Factory :</span> Village :
            Haidarabad, Ward:39, P.O. : Haidarabad Madrasa, P.S. : Pubail,
            Gazipur City Corporation, Gazipur-1710,{" "}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default InfoBox;
