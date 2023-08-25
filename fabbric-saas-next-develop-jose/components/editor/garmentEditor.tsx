import React from 'react';
import ImageBox from './imageBox';
// import ImageBox from './ImageBox';



import BlackLogo from "@/assets/Logotipo_Negro.png"






const GarmentEditor: React.FC = ({ }) => {

  const imageSrcs = [
   BlackLogo,
   BlackLogo,
   BlackLogo,
   BlackLogo,
   BlackLogo,
  
   BlackLogo,
    ];


  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    paddingTop: "15px",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
    // paddingLeft: "2%",
    // paddingRight: "2%",
  };

  const boxStyle: React.CSSProperties = {
    width:'20%',
    height: "40%",
    marginTop: "20px",
    // heigth:"",
    border: '1px solid #000',
    padding: '10px',
  };




  return (
    <div style={containerStyle}>
    {/* <div> */}
      {imageSrcs.map((src, index) => (

        // <div key={index}>{src}<div/>
        <ImageBox key={index} imageSrc={src} />

      ))}
    </div>
  );
};

export default GarmentEditor;
























// import React, { useEffect, useState } from "react";
// import { apiconstants } from "@/lib/api-constants";
// import fetchSubfamilies from "@/services/getEditorSubfamilies"
// import { useRouter } from "next/router";
// import ListSubfamilies from "@/services/getEditorSubfamilies";
// import VerifySession from "@/services/verifySession";
// import Image from "next/image";
// import logoblack from "@/assets/logo-black.svg";



  
//   const fetchTypeProduct = async () => {
//     let endpoint = apiconstants.getMaleFamilies;
//     const authToken = VerifySession;

//     const headers = {
//       Authorization: `Bearer ${authToken}`,
//     };
//     try {
//       const response = await fetch(endpoint, {
//         headers: headers,
//       });
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       return null;
//     }
//   };
  

//   interface TypeProduct {
//     UUID: string;
//     asset: GLbitfield;
//   }
  
//   interface ImageBoxContainerProps {
//     imageSrcs: string[];
//   }

//   const GarmentEditor: React.FC<ImageBoxContainerProps> = () => {
//     const [data, setData] = useState<TypeProduct[]>([]);

//     // const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
//     // const [showComponent, setShowComponent] = useState(false); 

//     useEffect(() => {
//       const fetchData = async () => {
//         const result = await fetchTypeProduct();
//         if (result) {
//           setData(result);
//         }
//       };
//       fetchData();
//     }, []);
  


//     const containerStyle: React.CSSProperties = {
//       display: 'flex',
//       flexWrap: 'wrap',
//       gap: '10px',
//     };
  
//     const boxStyle: React.CSSProperties = {
//         width:'20%',
//         height: "40%",
//         marginTop: "20px",
//         // heigth:"",
//         border: '1px solid #000',
//         padding: '10px',
//       };
    
//       const imageStyle = {
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover',
//       };
  
  
  
//     return (
//         <div style={boxStyle}>
//             <Image src={logoblack} alt="fabbric-logo" width={80} style={{ objectFit: "cover" }}/>
//         </div>
//     );
//   };
  
//   export default GarmentEditor;





















