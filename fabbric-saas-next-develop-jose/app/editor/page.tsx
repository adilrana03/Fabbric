"use client";
import { css, Grid, Card, Text } from "@nextui-org/react";


export default function Editor() {
  const MockItem = ({ text = '' }) => {
    return (
      <Card css={{ p:"$6", h: "$28", height: '$120', $$cardColor: '$colors$primary', borderRadius: "$0",
                   border: '$space$1 solid transparent', background: '$pink800', size: "xl"   }}>
        <Card.Body>
          <Text h6 size={15} color="white" css={{ mt: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };

   const sidebarItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  return (
    <div className="flex">
      <nav className="w-64 h-screen overflow-y-auto bg-gray-200">
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={index} className="py-4 pl-4 hover:bg-gray-300">
              {item}
            </li>
          ))}
        </ul>
      </nav>
      {/* <main className="flex-grow p-8">
        <Grid.Container gap={2} justify="center" alignItems="center">
          <Grid xl={3.5}>
            <MockItem text="1 of 3" />
          </Grid>
          <Grid xs={5}>
            <MockItem text="2 of 3" />
          </Grid>
        </Grid.Container>
      </main> */}
    </div>
  );


//   // return (
//   //   <div>
//   //     <main className="flex min-h-screen flex-col items-center justify-center">

//   //       <Grid.Container gap={2} justify="center" alignItems="center">
//   //         <Grid xl={3.5}>
//   //           <MockItem text="1 of 3" />
//   //         </Grid>
//   //         <Grid xs={5}>
//   //           <MockItem text="2 of 3" />
//   //         </Grid>

//   //         {/* <Grid xs={3.5}>
//   //           <MockItem text="3 of 3" />
//   //         </Grid> */}

//   //       </Grid.Container>


//   //     </main>
//   //   </div>
//   // );

}
