import React from "react";

const Input = (props) => {
  const { type="text", name, placeholder, value, onChange, errors={} } = props
    
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        defaultValue={value}
        onChange={onChange}
        className={`
          block w-full px-4 py-2 mt-2 text-gray-700 
          placeholder-gray-400 border rounded-lg focus:outline-none focus:border-blue-500 ${errors[name] ? 'border-red-400': ''}`}
      />
      {errors[name] && (
        <p className='text-red-400'>
            {errors[name].includes('_') 
            ? errors[name].split('_').join(' ')
            : errors[name]}
        </p>
    )}
  </>
  );
};

export default Input;
