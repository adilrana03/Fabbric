import "@/assets/css/globals.css";

import React from "react";

import NavBarEditorSteps from "@/components/navbar/navbareditor";
import BackgroundGrid from "@/components/background_grid";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-white">
        {/* <BackgroundGrid> */}
        <main className="bg-white pt-10">
              {children}
            </main>

          <NavBarEditorSteps step={1} />

          {/* <EditorNav /> */}

        {/* </BackgroundGrid> */}
      </body>
    </html>

  );
}

export default Layout;










// "use client";

// import React, { PropsWithChildren } from "react";

// import '@/lib/constants';
// import '@/lib/globals.css';

// import NavBarEditor from "@/components/navbar/navbareditor";
// import BackgroundGrid from "@/components/background_grid";

// export const metadata = {
//   title: "Fabbric-Editor",
//   description: "Fabbric description",
//   keywords: "Next generation clothes app",
// };

// interface LayoutProps {
//   children: React.ReactNode;
// }

// const Layout = ({ children }: LayoutProps) => {

//   return (
//     <>
//       <html>
//         <head>
//           <title>Fabbric-Editor</title>
//           <meta name="description" content={metadata.description} />
//           <link rel="icon" href="../public/favicon.ico" />
//         </head>
//         <body>
//           <BackgroundGrid>
//             <NavBarEditor />

//             {children}
//             {/*<Footer/>*/}

//           </BackgroundGrid>
//         </body>
//       </html>
//     </>
//   );
// };

// export default Layout;
