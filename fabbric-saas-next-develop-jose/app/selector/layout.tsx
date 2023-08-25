import "@/assets/css/globals.css";
import { AddressBar } from "@/ui/address-bar";
import Byline from "@/ui/byline";
import { EditorNav } from "@/ui/editor-nav";
import { Metadata } from "next";

import React, { PropsWithChildren } from "react";

import NavbarOnboardingSelector from "@/components/navbar/navbaronboarding";
import BackgroundGrid from "@/components/background_grid";

export const metadata: Metadata = {
  title: {
    default: "Next.js App Router",
    template: "%s | Next.js App Router",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
};


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <>
      <html lang="en" className="[color-scheme:dark]">
        <body>
          <BackgroundGrid>
            {children}
            <NavbarOnboardingSelector />
          </BackgroundGrid>
        </body>
      </html>
    </>
  );
}

export default Layout;

