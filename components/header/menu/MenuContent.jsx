import React from "react";
import { dsnCN } from "../../../hooks/helper";

function MenuContent({ className }) {
  const socialData = [
    {
      link: "https://facebook.com/ESARPaper Industries Ltd",
      name: "Facebook.",
    },

    { link: "#0", name: "Linkedin." },
    { link: "#0", name: "Twitter." },
  ];
  return (
    <div
      className={dsnCN(
        "container-content  d-flex flex-column justify-content-center",
        className
      )}
    >
      <div className="nav__info">
        <div className="nav-content">
          <li>
            <h5 style={{ fontSize: 18 }} className="sm-title-block mb-10">
              Address
            </h5>
            <p style={{ fontSize: 18 }} className="text-">
              <span style={{ fontWeight: "bold" }}>Office : </span> House: 11,
              Road: 1/B, Sector: 05, Uttara, Dhaka-1230, Bangladesh.
            </p>
            <br />
            <p
              style={{ fontSize: 18, wordWrap: "break-word" }}
              className="text-p"
            >
              <span style={{ fontWeight: "bold" }}>Factory :</span> Village :
              Haidarabad, Ward:39, P.O. : Haidarabad Madrasa, P.S. : Pubail,
              Gazipur City Corporation, Gazipur-1710,{" "}
            </p>
          </li>
        </div>
        <div className="nav-content mt-30">
          <h5 style={{ fontSize: 18 }} className="sm-title-block mb-10">
            Contact
          </h5>

          <p className="links over-hidden">
            <a
              style={{ fontSize: 18 }}
              className="link-hover"
              href="mailto:info@esar.com"
              data-hover-text="info@esar.com"
            >
              info@esar.com
            </a>
          </p>
        </div>
      </div>
      {/* <div className="nav-social nav-content mt-30">
        <div className="nav-social-inner p-relative">
          <h5 className="sm-title-block mb-10">Follow us</h5>
          <ul>
            {socialData.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div> */}
    </div>
  );
}

export default MenuContent;
