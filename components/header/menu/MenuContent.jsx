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
          <h5 className="sm-title-block mb-10">Office</h5>
          <p>Gazipur, Bangladesh</p>
        </div>
        <div className="nav-content mt-30">
          <h5 className="sm-title-block mb-10">Contact</h5>

          <p className="links over-hidden">
            <a
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
