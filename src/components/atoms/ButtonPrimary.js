import React from 'react';


const ButtonPrimary = ({children, onClick, disabled }) => (
  <button className='btn btn-primary' onClick={onClick} disabled={disabled} > {children}</button>
);

export default ButtonPrimary;
