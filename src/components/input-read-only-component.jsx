import React from "react";

const InputReadOnly = (props) => {
  const { label = '', name, value } = props
    
  return (
    <>
    {label && <label>{label}</label>}
    <span  
        name={name}
        className={`
          block w-full px-4 py-2 mt-2 text-gray-700 font-bold text-2xl`}
    >
        {value}
    </span>
  </>
  );
};

export default InputReadOnly;
