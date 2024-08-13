import React from "react";
import { dsnCN } from "../../hooks/helper";

function InfoBox({ className }) {
  return (
    <div className={dsnCN("box-info-contact", className)}>
      <ul>
        <li>
          <h5 className="title-block mb-15">Contact</h5>
          <p className="text-p ">+8801929-673465</p>
          <div className="over-hidden mt-5">
            <a
              className="link-hover"
              data-hover-text="fuzaelbd@gmail.com"
              href="#"
            >
              fuzaelbd@gmail.com
            </a>
          </div>
        </li>
        <li>
          <h5 className="title-block mb-15">Address</h5>
          <p className="text-p">
            Sector 3, Road 14, House 25, Uttara, <br /> Dhaka-1230, Bangladesh
          </p>
        </li>
        <li>
          <h5 className="title-block mb-15">Follow Us</h5>
          <div className="social-item over-hidden">
            <a
              className="link-hover"
              data-hover-text="Instagram."
              href="#"
              target="_blank"
              rel="nofollow"
            >
              Instagram.
            </a>
          </div>
          <div className="social-item over-hidden">
            <a
              className="link-hover"
              data-hover-text="Facebook."
              href="https://facebook.com/ESARPaper Industries Ltd"
              target="_blank"
              rel="nofollow"
            >
              Facebook.
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default InfoBox;
