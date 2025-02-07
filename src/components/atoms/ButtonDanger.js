import React from 'react';


const ButtonDanger = ({children, onClick, disabled }) => (
  <button className='btn btn-danger' onClick={onClick} disabled={disabled}  >  {children}  </button>
);

export default ButtonDanger;
