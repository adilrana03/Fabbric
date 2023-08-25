"use client";
import { Card, Text } from "@nextui-org/react";

import maleBackground from '@/assets/backgrounds/male.png';
import femaleBackground from '@/assets/backgrounds/female.png';
import unisexBackground from '@/assets/backgrounds/unisex.png';

import ButtonColorSecondary from '@/components/buttons/buttonColorSecondary';



export default function Selector() {

  interface MockItemProps {
    text?: string;
    textButton?: string;
    height?: string;
    type?: number;
    link: string;
  }

  const MockItem: React.FC<MockItemProps> = ({ text, height = '39.2vh', type, textButton, link }) => {
    let backgroundImageUrl = maleBackground;
    let paddingCard = 'pb-4'

    if (type === 1) {
      backgroundImageUrl = unisexBackground;
      paddingCard='pb-80'
    } else if (type === 2) {
      backgroundImageUrl = femaleBackground;
    } else {
      backgroundImageUrl = maleBackground;
    }

    return (
      <Card
        css={{
          height,
          border: "none",
          borderRadius: "0px",
          backgroundImage: `url(${backgroundImageUrl.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'baseline',
        }}
      >
        <div className={`${paddingCard} pl-4`}>
        <Card.Body>
          <Text h6 size={20} css={{ mt: 0 }}>
            {link.toUpperCase()}
          </Text>
          <p>
            Small description
          </p>
            <ButtonColorSecondary text={textButton} link={link} />
        </Card.Body>
        </div>
      </Card>
    );
  };


  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    height: '100vh',
  };

  return (

    <div className="items-center justify-center">
      <div className="p-4">
        <div className="items-center h-full">
          <div className="p-[10px]">
            <div style={containerStyle}>

              <div className="align-items-center justify-center flex flex-col pr-2">
                <MockItem text="IZQ-1" height="80vh" type={1} link="genderless" />
              </div>

              <div className="align-items-center justify-center flex flex-col pr-2">
                <div className="pb-2">
                  <MockItem text="DCHA-1" type={2} link="female" />
                </div>
                <div className="pt-2">
                  <MockItem text="DCHA-2" type={3} link="male" />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

