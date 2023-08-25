"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavBarStyle, LinksOnboarding, StartEdit } from "./navbar.styles";

import logoblack from "@/assets/logo-black.svg";



import { colors } from "@mui/material";

import "./navbar.module.css";

const NavBarOnboardingSelector = () => {
  let style_navbar = { color: "white", fontStyle: "light", fontSize: 15 };

  return (
    <NavBarStyle>
      <div className="navbar flex justify-between items-center">
        <div className="flex justify-center items-center">
            <a href="/">
                < Image src={ logoblack } alt="fabbric-logo" width={80} />
            </a>

          {/* <div className="flex-none">
            <ul className="menu menu-horizontal px-1 flex items-center">
              <LinksOnboarding>
                <Link
                  href="/fabbric"
                  className="link-navbar-onboarding"
                  style={style_navbar}
                >
                  CÓMO EMPEZAR
                </Link>
              </LinksOnboarding>

              <LinksOnboarding>
                <Link href="/fabbric" style={style_navbar}>
                  SERVICIOS
                </Link>
              </LinksOnboarding>

              <LinksOnboarding>
                <Link href="/fabbric" style={style_navbar}>
                  CASOS REALES
                </Link>
              </LinksOnboarding>

              <LinksOnboarding>
                <Link href="/fabbric" style={style_navbar}>
                  SHOP
                </Link>
              </LinksOnboarding>
            </ul>
          </div> */}

        </div>

        {/* <Link href="/fabbric" style={style_navbar}>
          <StartEdit>EMPEZAR A DISEÑAR</StartEdit>
        </Link> */}
        
      </div>
    </NavBarStyle>
  );
};

export default NavBarOnboardingSelector;
