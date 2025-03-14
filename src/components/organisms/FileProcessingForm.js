import React from "react";
import { Card, Form, Button, Row, Col, } from "react-bootstrap";
import FileUpload from "../molecules/FileUpload";
import FortnightControlledDatePicker from "../molecules/FortnightControlledDatePicker";
import { useFileSavingFormContext } from "../../context/FileSavingFormContext";

const FileProcessingForm = ({
  onFileChange,
  isFileUploaded,
  onDateChange,
  selectedDate,
  isDateSelectable,
  onLoadFile,
}) => {
  const { loding } = useFileSavingFormContext();

  return (
    <Card className="shadow-lg rounded-3 p-3 mt-4">
      <Card.Body>
        <Card.Title className="text-center fw-bold mb-2">Carga de documento</Card.Title>

        <Form className="mt-3">
        


          <Row className="g-2">
            {/* File Upload & Button */}
            <Col xs={6} className="me-4">
              <FileUpload onFileChange={onFileChange} isFileUploaded={isFileUploaded} />
            </Col>

            <Col xs={4}>
              <FortnightControlledDatePicker
                handleDateChange={onDateChange}
                selectedDate={selectedDate}
                isDateSelectable={isDateSelectable}
              />
            </Col>

            <Col xs={4} className="mb-3">
              <Form.Group controlId="exampleSelect">
                <Form.Label>Escoge un formato</Form.Label>
                <Form.Select>
                  <option value="apple">Hora militar resumida</option>
                  <option value="banana">Hora mirlitar</option>
                  <option value="cherry">Tiempo regular</option>
                </Form.Select>
              </Form.Group>
            </Col>

          </Row>

          {/* Date Picker */}
          <Row className="mt-2">
            <Col md={2}>
              <Button  variant="primary" onClick={onLoadFile} className="w-100" onLoadFile={onLoadFile} disabled={loding}>
                {loding ? "Cargando..." : "Cargar"}
              </Button>

            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FileProcessingForm;
