import React, { useEffect, useState } from "react";
import { API_ENDPOINTS } from "@/lib/api-constants";
import VerifySession from "./verifySession";

const fetchSubfamilies = async (checkedValue: string) => {
    let endpoint = API_ENDPOINTS.getSubfamilies;
    const authToken = VerifySession();

    const headers = {
      Authorization: `Bearer ${authToken}`,
    };
    try {
      const response = await fetch(endpoint+checkedValue, {
        headers: headers,
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const datasubfamilies = await response.json();
      console.log(datasubfamilies)
      return datasubfamilies;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };
  
  
interface SubFamilies  {
    UUID: string;
    name: string;
}

interface Props {
    checkedValue: string;
  }
  
const ListSubfamilies: React.FC<Props> = ({checkedValue}) => {
    const [data, setData] = useState<SubFamilies[]>([]);
    const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetchSubfamilies(checkedValue);
          if (result) {
            setData(result);
          }
        };
        fetchData();
      }, []);
  
    return (
      <div className="pt-10 pl-4">
        {data.map((item) => (
            <div key={item.UUID} className="pb-2">
              
              <label  htmlFor={item.UUID} className="pl-2 text-black">SECOND COMPONENT</label>
  
            </div>
        ))}
      </div>
    );
  };


export default ListSubfamilies