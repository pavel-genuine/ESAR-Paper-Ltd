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
          <p>
            Sector 3, Road 14, House 25, Uttara, <br /> Dhaka-1230, Bangladesh
          </p>
        </div>
        <div className="nav-content mt-30">
          <h5 className="sm-title-block mb-10">Contact</h5>
          <p className="links over-hidden mb-1">
            <a
              className="link-hover"
              href="tel:+880 1929-673465"
              data-hover-text="+880 1929-673465"
            >
              +880 1929-673465
            </a>
          </p>
          <p className="links over-hidden">
            <a
              className="link-hover"
              href="mailto:fuzaelbd@gmail.com"
              data-hover-text="fuzaelbd@gmail.com"
            >
              fuzaelbd@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="nav-social nav-content mt-30">
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
      </div>
    </div>
  );
}

export default MenuContent;
