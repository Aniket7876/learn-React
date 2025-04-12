import React from 'react';

function Button({
  children,
  type = 'button',
  bgcolour = 'bg-blue-600',
  textColour = 'text-white',
  className = '',
  ...props
}) {
  return (
    <>
      <button className={`px-4 py-2 rounded-lg ${className} ${bgcolour} ${textColour}}`} {...props}>
        {children}
      </button>
    </>
  );
}
export default Button;
