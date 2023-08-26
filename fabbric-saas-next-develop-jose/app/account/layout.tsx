import React, { PropsWithChildren } from "react";
import NavBarDashboard from "@/components/navbar/navbar_dashboard";
import SidebarAccount from "@/components/sidebar/sidebar_account";
import FooterDashboard from "@/components/footer/footer_dashboard";
import { getServerSession } from "next-auth/next"
import { options } from "@/lib/auth";
import { SessionProvider } from 'next-auth/react';


interface LayoutProps {
  children: React.ReactNode;
}


const Layout = async ({ children }: LayoutProps) => {

    const session = await getServerSession(options)
    const props = { session: session }

    return (
            <main>
                <NavBarDashboard props={props} />
                <SidebarAccount  />
                {children}
                <FooterDashboard/>
            </main>
    );
};



export default Layout;
