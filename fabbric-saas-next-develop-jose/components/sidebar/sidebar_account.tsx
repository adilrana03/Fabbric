"use client";
import React, { useState } from "react";
import {sidebarLinkStyle, sidebarSubLinkStyle} from "./sidebar.styles";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const SidebarAccount = () => {

    return (
        <aside id="dashboard-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-11 transition-transform -translate-x-full bg-white sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full pt-8 pb-4 overflow-y-auto bg-white light:bg-gray-800" style={{ borderLeft: '1px solid #7745FF', borderRight: '1px solid #7745FF', margin: '0 0 0 1.25rem'}} >

                <BrowserRouter>
                    <ul className="space-y-0 font-medium">
                        <li>
                            <NavLink to="/account/profile" className="flex items-center text-gray-900 light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group primaryLink p-5 " style={sidebarLinkStyle}>
                            <span className="uppercase">Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/account/my-plans" className="flex items-center text-gray-900 light:text-white hover:bg-gray-100 light:hover:bg-gray-700 group primaryLink {router.pathname == '/account/my-plans' ? 'active' : ''} p-5" style={sidebarLinkStyle}>
                            <span className="uppercase">My Plans</span>
                            </NavLink>
                        </li>
                    </ul>
                </BrowserRouter>
            </div>
        </aside>
    );
};

export default SidebarAccount;
