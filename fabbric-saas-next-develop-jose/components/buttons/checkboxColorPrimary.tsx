
import { useState } from "react";
import '@/components/buttons/checkbox.css'




interface CheckboxProps {
    id: string;
    label: string;
    checked?: boolean;
  }



// const Checkbox = ({ id, label, checked, ...props }) => {
const Checkbox: React.FC<CheckboxProps> = ({ id, label, checked, ...props }) => {

    const defaultChecked = checked ? checked : false;
    const [isChecked, setIsChecked] = useState(defaultChecked);


    return (
      <div className="checkbox-wrapper">
        <input
          id={id}
          type="checkbox"
          checked={!isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          {...props}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
  
  export default Checkbox;




