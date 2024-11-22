import React from 'react';
import Button from '../atoms/Button';

const ActionButtons = ({ onProcess, onDownload }) => (
  <div>
    <Button onClick={onProcess}>Procesar datos</Button>
    <Button onClick={onDownload}>Descargar datos procesados</Button>
  </div>
);

export default ActionButtons;
