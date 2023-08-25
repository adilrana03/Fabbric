import React, { useEffect, useState } from "react";
import { Checkbox } from "@nextui-org/react";

import { API_ENDPOINTS } from "@/lib/api-constants";

import fetchSubfamilies from "@/services/getEditorSubfamilies"
import VerifySession from "./verifySession";
import { useRouter } from "next/router";
import ListSubfamilies from "@/services/getEditorSubfamilies";


const fetchMaleFamilies = async () => {
  let endpoint = API_ENDPOINTS.getMaleFamilies;
  const authToken = VerifySession();
  const headers = {
    Authorization: `Bearer ${authToken}`,
  };
  try {
    const response = await fetch(endpoint, {
      headers: headers,
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};




interface MaleFamily {
  UUID: string;
  name: string;
}

const ListMaleFamilies: React.FC = () => {
  const [data, setData] = useState<MaleFamily[]>([]);
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
  const [showComponent, setShowComponent] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMaleFamilies();
      if (result) {
        setData(result);
      }
    };
    fetchData();
  }, []);

  
  const handleCheckboxChange = (checkedValue: string) => {
    console.log(checkedValue)
    setSelectedCheckbox((prevSelectedCheckbox) =>
      prevSelectedCheckbox === checkedValue ? null : checkedValue
    );
    if (checkedValue === "tu-uuid-a-mostrar") {
      setShowComponent(true);
      // fetchSubfamilies( checkedValue );
      // <ListSubfamilies >
    } else {
      setShowComponent(false);
    }
  };





  return (
    <div className="pt-10 pl-4">
      {data.map((item) => (
          <div key={item.UUID} className="pb-2">
            <input 
            type="checkbox"
            id={item.UUID}
            checked={item.UUID === selectedCheckbox}
            onChange={() => handleCheckboxChange(item.UUID)}
            style={{
              appearance: 'none',
              width: '16px',
              height: '16px',
              border: '1px solid #7745FF', // Borde del checkbox
              borderRadius: '0px',
              background: item.UUID === selectedCheckbox ? '#7745FF' : '#fff',
              cursor: 'pointer',
              outline: 'none',
            }}/>
            <label  htmlFor={item.UUID} className="pl-2 text-black">{item.name.toUpperCase()}</label>

          </div>


      ))}

          {/* {showComponent && <ListSubfamilies checkedValue={item.UUID}/>} */}

    </div>
  );
};



export default ListMaleFamilies;