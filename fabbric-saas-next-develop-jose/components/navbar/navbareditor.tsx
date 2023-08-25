import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavBarStyle, LinksEditor } from "./navbar.styles";

import logoblack from "@/assets/logo-black.svg";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { BiShoppingBag } from "@react-icons/all-files/bi/BiShoppingBag";

import "./navbar.module.css";

interface StepsNavBar {
  step: number
}



const NavBarEditorSteps: React.FC<StepsNavBar> = ({ step }) => {
// const NavBarEditor = React.FC(step) => {

  let style_navbar = { color: "black", fontSize: 18 };
  let style_navbar_bold = { color: "black", fontWeight: "bold", fontSize: 18 };

  return (
    <NavBarStyle>
      <div className="navbar-container">
      <div className="navbar top-0 left-0 w-full flex justify-between items-center">
          <Image src={logoblack} alt="fabbric-logo" width={80} />
            <div className="flex justify-center items-center">
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1 flex items-center">
                  <LinksEditor>
                    <Link href="/fabbric" style={ step == 1 ? style_navbar_bold : style_navbar } >
                      1. Design
                    </Link>
                  </LinksEditor>
                  <IoIosArrowForward style={{color: "black"}}/>

                  <LinksEditor>
                    <Link href="/fabbric" style={ step == 2 ? style_navbar_bold : style_navbar }>
                      2. Production
                    </Link>
                  </LinksEditor>
                  <IoIosArrowForward style={{color: "black"}}/>

                  <LinksEditor>
                    <Link href="/fabbric" style={ step == 3 ? style_navbar_bold : style_navbar }>
                      3. Logistics
                    </Link>
                  </LinksEditor>
                  <IoIosArrowForward style={{color: "black"}}/>

                  <LinksEditor>
                    <Link href="/fabbric" style={ step == 4 ? style_navbar_bold : style_navbar }>
                      4. Checkout
                    </Link>
                  </LinksEditor>

                </ul>
              </div>
            </div>
            <Link href="/fabbric" style={style_navbar}>
              <BiShoppingBag/>
            </Link>
        </div>
      </div>
    </NavBarStyle>
  );
};

export default NavBarEditorSteps;
