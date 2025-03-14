import React from 'react';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';

const ActionButtons = ({ onProcess, onDownload }) => (
  <Container className="text-center">
    <div className="d-flex justify-content-center gap-3">
      <Button variant="primary" onClick={onProcess}>
        📊 Procesar Datos
      </Button>
      <Button variant="success" onClick={onDownload}>
        ⬇️ Descargar Datos
      </Button>
    </div>
  </Container>
);

export default ActionButtons;

