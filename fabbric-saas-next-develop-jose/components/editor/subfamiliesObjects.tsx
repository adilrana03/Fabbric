// import React, { useEffect, useState } from "react";
// import fetchSubfamilies from "@/services/getEditorSubfamilies"


// interface SubFamilies  {
//     UUID: string;
//     name: string;
// }


// interface Props {
//     checkedValue: string;
//   }


// const ListSubfamilies: React.FC<Props> = ({checkedValue}) => {
//     const [data, setData] = useState<SubFamilies[]>([]);
//     const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
  
  
//     useEffect(() => {
//         const fetchData = async () => {
//           const result = await fetchSubfamilies(checkedValue);
//           if (result) {
//             setData(result);
//           }
//         };
//         fetchData();
//       }, []);
  

//     const handleCheckboxChange = (checkedValue: string) => {
//       console.log(checkedValue)
//       setSelectedCheckbox((prevSelectedCheckbox) =>
//         prevSelectedCheckbox === checkedValue ? null : checkedValue
//       );
//       fetchSubfamilies(checkedValue)
//     };

//     return (
//       <div className="pt-10 pl-4">
//         {data.map((item) => (
//             <div key={item.UUID} className="pb-2">
//               <input 
//               type="checkbox"
//               id={item.UUID}
//               checked={item.UUID === selectedCheckbox}
//               onChange={() => handleCheckboxChange(item.UUID)}
//               style={{
//                 appearance: 'none',
//                 width: '16px',
//                 height: '16px',
//                 border: '1px solid #7745FF', // Borde del checkbox
//                 borderRadius: '0px',
//                 background: item.UUID === selectedCheckbox ? '#7745FF' : '#fff',
//                 cursor: 'pointer',
//                 outline: 'none',
//               }}/>
//               <label  htmlFor={item.UUID} className="pl-2 text-black">{item.name.toUpperCase()}</label>
  
//             </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default ListSubfamilies