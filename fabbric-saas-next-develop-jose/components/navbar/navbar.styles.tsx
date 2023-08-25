import { BaseColors } from '@/lib/constants';

import { CSSProperties } from 'react';
import tw from 'tailwind-styled-components';

// STYLES OF NAVBAR 
// STYLES OF NAVBAR 
export const Nav = tw.div`
bg-white
shadow
p-6
fixed
top-0
left-0
w-full
h-auto
`;

export const Links = tw.li`
text-center
text-primary
ml-4
flex-row
pr-4
transition-colors
hover:secondary
`;


export const Image = tw.img`
  mx-auto
`;



// STYLES OF NAVBAR ONBOARDING
// STYLES OF NAVBAR ONBOARDING
// export const NavOnboarding = tw.div`
// bg-primary
// p-6
// pl-10
// fixed
// top-0
// left-0
// w-full
// h-auto
// `;

export const LinksOnboarding = tw.li`
text-center
ml-4
flex-row
pr-4
transition-colors
hover:secondary
`;

export const StartEdit = tw.div`
flex-none
menu
menu-horizontal 
mr-4 
flex 
justify-end 
items-center
box-border
px-6
py-2
border-2
`;



// STYLES OF NAVBAR EDITOR
// STYLES OF NAVBAR EDITOR
export const NavBarStyle = tw.div`
bg-white
p-8
pl-10
fixed
top-0
left-0
w-full
h-20
shadow-md
`;

export const LinksEditor = tw.li`
text-center
ml-4
flex-row
pr-4
transition-colors
hover:secondary
`;

