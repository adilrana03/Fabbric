"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {sidebarLinkStyle, sidebarSubLinkStyle} from "./sidebar.styles";
import logoblack from "@/assets/logo-black.svg";
import { Dropdown } from "@nextui-org/react";



import { FaRegBell } from "@react-icons/all-files/fa/FaRegBell";
import fetchUsers from "@/services/fetchDummyData";




const SidebarDashboard = () => {
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
    <aside id="dashboard-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-11 transition-transform -translate-x-full bg-white sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full pt-8 pb-4 overflow-y-auto bg-white light:bg-gray-800" style={{ borderLeft: '1px solid #7745FF', borderRight: '1px solid #7745FF', margin: '0 0 0 1.25rem'}} >
            <ul className="space-y-0 font-medium">
                <li>
                    <a href="#" className="flex items-center text-gray-900 light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group primaryLink active p-5" style={sidebarLinkStyle}>
                    <span className="uppercase">Home</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="flex items-center p-5 text-gray-900 light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group primaryLink" style={sidebarLinkStyle}>
                    <span className="flex-1 uppercase">Design & Production</span>
                    </a>
                    <hr className="p-2" style={{borderColor: '#7745FF', margin: '0.25rem 1.25rem'}}></hr>
                    <ul className="ml-5 mb-5">
                        <li className="uppercase" style={sidebarSubLinkStyle}>Create a new design</li>
                        <li className="uppercase" style={sidebarSubLinkStyle}>Designs</li>
                        <li className="uppercase" style={sidebarSubLinkStyle}>Samples</li>
                        <li className="uppercase" style={sidebarSubLinkStyle}>Production orders</li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="flex items-center p-5 text-gray-900 light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group primaryLink" style={sidebarLinkStyle}>
                    <span className="flex-1 uppercase">Fullfilment</span>
                    </a>
                    <hr className="p-2" style={{borderColor: '#7745FF', margin: '0.25rem 1.25rem'}}></hr>
                    <ul className="ml-5 mb-5">
                        <li className="uppercase" style={sidebarSubLinkStyle}>Orders</li>
                        <li className="uppercase" style={sidebarSubLinkStyle}>Inventory</li>
                        <li className="uppercase" style={sidebarSubLinkStyle}>Receivings</li>
                        <li className="uppercase" style={sidebarSubLinkStyle}>Returns</li>
                    </ul>
                </li>
                <li>
                    <a href="#" className="flex items-center p-5 text-gray-900 light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group primaryLink" style={sidebarLinkStyle}>
                    <span className="flex-1 uppercase">Ecommerce</span>
                    </a>
                    <hr className="p-2" style={{borderColor: '#7745FF', margin: '0.25rem 1.25rem'}}></hr>
                    <ul className="ml-5 mb-5">
                        <li className="uppercase" style={sidebarSubLinkStyle}>Storefront</li>
                        <li className="uppercase" style={sidebarSubLinkStyle}>Sale Channels</li>
                        <li className="uppercase" style={sidebarSubLinkStyle}>My Products</li>
                    </ul>
                </li>
            </ul>
        </div>
    </aside>
  );
};

export default SidebarDashboard;
