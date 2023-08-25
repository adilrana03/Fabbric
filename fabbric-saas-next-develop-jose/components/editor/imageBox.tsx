import React from 'react';
import Image from "next/image";




interface ImageBoxProps {
  imageSrc: any;
}

const ImageBox: React.FC<ImageBoxProps> = ({ imageSrc }) => {

  const boxStyle1: React.CSSProperties = {
    border: '1px solid #7c74ff',
    padding: '20px',
    // width:'20%',
    // height: "400",
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const boxStyle2: React.CSSProperties = {
    width:'20%',
    height: "40%",
    marginTop: "20px",
    // heigth:"",
    border: '1px solid #000',
    padding: '10px',
  };

  return (
    // <div style={boxStyle1}>
    <div style={{width:"23%", height:"40vh", border: "1px solid #000"} } >

      {/* <img src={imageSrc} alt="Imagen" style={imageStyle} /> */}
          <Image alt="fabbric-logo" src={imageSrc} width={200} height={500} style={imageStyle}/> 

          <div style={{width:"23%", height: "20px", color: "#fff"}}></div>
      {/* width={300} height={500} */}

    </div>
  );
};

export default ImageBox;
