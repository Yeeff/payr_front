import React from 'react';
import Button from '../atoms/Button';

const ActionButtons = ({ onProcess, onDownload }) => (
  <div>
    <Button onClick={onProcess}>Process Data</Button>
    <Button onClick={onDownload}>Download Processed File</Button>
  </div>
);

export default ActionButtons;
