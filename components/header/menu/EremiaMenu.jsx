import React from "react";
import Navbar, { Nav } from "../../nav/Navbar";
import MenuContent from "./MenuContent";
import Logo from "../../logo/Logo";

const menuContent = [
  {
    name: "Home",
    href: "/",
    // dropdownMenu: [
    //   { name: "Main Demo", href: "/" },
    //   { name: "One Page 2", href: "/demo-2" },
    //   { name: "One Page 3", href: "/demo-3" },
    //   { name: "Corporate", href: "/corporate" },
    //   { name: "Corporate 2", href: "/corporate-2" },
    //   { name: "Personal", href: "/personal" },
    //   { name: "Personal 2", href: "/personal-2" },
    // ],
  },

  {
    name: "Products",
    dropdownMenu: [
      {
        name: "Trims & Accessories",
        dropdownMenu: [
          {
            name: "Hangtags",
            href: "/",
          },
          {
            name: "Woven and Printed Labels",
            href: "/",
          },
          {
            name: "Heat Transfer Label",
            href: "/",
          },
          {
            name: "Care Labels",
            href: "/",
          },
        ],
      },
      {
        name: "Self Adhesive Labels",
        href: "/",
      },
      {
        name: "Paper Based Packaging Box",
        href: "/",
      },
      {
        name: "Belly Band & Photo Inlays",
        href: "/",
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
  );
};

EremiaMenu.defaultProps = {
  hamburger: false,
};

export default EremiaMenu;
