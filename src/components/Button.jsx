import React from 'react';

const Button = ({text, className}) => {
  return (
    <button className={`${className} bg-black text-white font-bold py-2 px-4 rounded dark:bg-primary`}>
      {text}
    </button>
  );
}

export default Button;