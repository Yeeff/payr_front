import React from "react";
import Card from "react-bootstrap/Card";
import ButtonAtom from "../atoms/ButtonAtom";
import { ListGroup } from "react-bootstrap";
import { FaTrash, FaPlay } from "react-icons/fa"; // Icons for buttons

function FileRepresentation({ id, uploadedFileName, handleProcess, onDeleteFile, loading }) {
  return (
    <Card className="mb-3 shadow-sm">

      <ListGroup variant="flush">
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
          <span className="text-truncate">{uploadedFileName}</span>

          <div className="d-flex gap-2">
            <ButtonAtom variant={'secondary'} onClick={() => handleProcess(uploadedFileName)} disabled={loading}>
              <FaPlay className="me-2" /> Procesar
            </ButtonAtom>

            <ButtonAtom variant={'danger'} onClick={() => onDeleteFile(uploadedFileName)} disabled={loading}>
              <FaTrash className="me-2" /> Borrar
            </ButtonAtom>
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default FileRepresentation;
