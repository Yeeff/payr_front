import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonAtom = ({children, onClick, isDisabled, variant }) => (
  <Button variant={variant} onClick={onClick} disabled={isDisabled} > {children}</Button>
);

export default ButtonAtom;
