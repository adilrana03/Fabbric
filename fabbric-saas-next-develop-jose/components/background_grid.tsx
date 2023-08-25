import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import backgroundGrid from "@/assets/backgrounds/Malla_Morada.png";



const BackgroundGrid = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <Image
            src={backgroundGrid}
            alt="background"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
      </>

    );
  };
  
  


export default BackgroundGrid;
