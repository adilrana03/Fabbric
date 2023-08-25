import React, { PropsWithChildren } from "react";
import NavBarDashboard from "@/components/navbar/navbar_dashboard";
import SidebarDashboard from "@/components/sidebar/sidebar_dashboard";
import FooterDashboard from "@/components/footer/footer_dashboard";
import { getServerSession } from "next-auth/next"
import { options } from "@/lib/auth";



interface LayoutProps {
  children: React.ReactNode;
}


const Layout = async ({ children }: LayoutProps) => {

    const session = await getServerSession(options)
    const props = { session: session }


    return (
        <>
        <html>
            <head>
            <title>Fabbric</title>
            <meta name="description" content="" />
            <link rel="icon" href="../public/favicon.ico" />
            </head>
            <body>
                <main>
                    <NavBarDashboard props={props} />
                    <SidebarDashboard  />

                    {children}
                    <FooterDashboard/>
                </main>
            </body>
        </html>
        </>
    );
};



export default Layout;
