import React from "react";
import Navbar, { Nav } from "../../nav/Navbar";
import MenuContent from "./MenuContent";
import Logo from "../../logo/Logo";
import { data } from "../../../data/portfolio";

const menuContent = [
  {
    name: "Home",
    href: "/",
  },

  {
    name: "Products Solutions",

    dropdownMenu: [
      {
        name: "All Products",
        href: "/all-products",
      },
      {
        name: "Hangtags",
        href: "/products/hangtags?id=1",
      },
      {
        name: "Woven and Printed Labels",
        href: "/products/woven-and-printed-labels?id=4",
      },
      {
        name: "Heat Transfer Label",
        href: "/products/heat-transfer-label?id=2",
      },
      {
        name: "Care Labels",
        href: "/products/care-label?id=3",
      },

      ,
      {
        name: "Self Adhesive Labels",
        href: "/products/self-adhesive-label?id=5",
      },
      {
        name: "Paper Based Packaging Box",
        href: "/products/paper-based-packaging-box?id=6",
      },
      {
        name: "Belly Band & Photo Inlays",
        href: "/products/belly-band-&-photo-inlays?id=7",
      },
      {
        name: "Poly Bags",
        href: "/products/poly-bags?id=8",
      },
      {
        name: "Corrugated Packaging",
        href: "/products/corrugated-packaging?id=9",
      },
    ],
  },

  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

const EremiaMenu = ({ hamburger }) => {
  let $key = 0;
  const getSubMenu = (items) => {
    $key++;
    if (items.dropdownMenu) {
      return (
        <Nav.Dropdown name={items.name} key={$key}>
          {items.dropdownMenu.map((item) => getSubMenu(item))}
        </Nav.Dropdown>
      );
    }
    return (
      <Nav.Link href={items.href} key={$key}>
        {items.name}
      </Nav.Link>
    );
  };

  return (
    <section className="v-light">
      <Navbar hamburger={hamburger}>
        <Navbar.Brand
          href={"/"}
          transitionPage={{ title: "ESAR Paper Industries Ltd" }}
        >
          <Logo height="auto" />
        </Navbar.Brand>

        <Navbar.Collapse cover="Menu">
          <Nav>{menuContent.map((item) => getSubMenu(item))}</Nav>
          <MenuContent className="section-margin" />
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

EremiaMenu.defaultProps = {
  hamburger: false,
};

export default EremiaMenu;
