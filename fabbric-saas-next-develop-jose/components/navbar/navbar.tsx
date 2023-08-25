"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Nav, Links } from "./navbar.styles";
import logoblack from "@/assets/logo-black.svg";
import { Dropdown } from "@nextui-org/react";


import DropdownMenu from "./dropdownmenu";

import { FaRegBell } from "@react-icons/all-files/fa/FaRegBell";
import fetchUsers from "@/services/fetchDummyData";





const NavBar = () => {
  // fetchUsers();

  const [count, setCount] = useState(0);
 const menuItems = [
   { key: "new", name: "New File" },
   { key: "copy", name: "Copy Link" },
   { key: "edit", name: "Edit File" },
   { key: "delete", name: "Delete File" },
 ];


  const handleUserClick = () => {
  if (typeof window !== "undefined") {
    window.alert("Nombre de usuario clicado");
  }
};
    
  return (
    <Nav>
      <div className="navbar flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Image src={logoblack} alt="fabbric-logo" onClick={handleUserClick} />
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex justify-end items-center">
            
              {/* <Links> */}
            <FaRegBell color="black" size="18px" />
              {/* </Links> */}

            
            <div className="username">
              {/* <Links> */}
                <Dropdown>
                  <Dropdown.Button light>NOMBRE DE USUARIO</Dropdown.Button>
                  <Dropdown.Menu aria-label="Static Actions" color="primary" css={{ $$dropdownMenuWidth: "280px" }}>
                    <Dropdown.Item key="new">New file</Dropdown.Item>
                    <Dropdown.Item key="copy">Copy link</Dropdown.Item>
                    <Dropdown.Item key="edit">Edit file</Dropdown.Item>
                    <Dropdown.Item key="close" withDivider color="error">
                      Close session
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              {/* </Links> */}
            </div>

            <Links>
              <Link href="/fabbric">EDITOR</Link>
            </Links>

            <Links>
              <Link href="/onboarding">LOGIN</Link>
            </Links>

            <Links>
              <Link href="/onboarding/register">REGISTER</Link>
            </Links>

            <Links>
              <Link href="/fabbric">HOME</Link>
            </Links>
          </ul>
        </div>
      </div>
    </Nav>
  );
};

export default NavBar;
