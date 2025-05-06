import React from 'react';
import FileProcessingForm from '../organisms/FileProcessingForm';
import ProcessedData from '../organisms/ProcessedData';
import FileListOrganism from '../organisms/FileListOrganism';

import { Container } from "react-bootstrap";

const Template = ({
  onFileChange,
  isFileUploaded,
  file,
  onLoadFile,

  onDateChange,
  selectedDate,
  isDateSelectable,
  formsPeriods,
  selectedFormId,

  onProcess,
  onDownload,
  handleSiigoFormat,
  fileNameId,
  processedData,
  showProcessedData,

  onSeeEmployeeDetails

}) => (
  <div id="template">
    <header className="bg-primary text-white py-3 shadow-sm">
      <Container className="text-center">
        <h1 className="fw-bold">Módulo de Nómina</h1>
      </Container>
    </header>

    <main>

    <Container>
    <FileProcessingForm
        onFileChange={onFileChange}
        isFileUploaded={isFileUploaded}

        isDateSelectable={isDateSelectable}
        onDateChange={onDateChange}
        selectedDate={selectedDate}
        formsPeriods = {formsPeriods}
        selectedFormId={selectedFormId}

        onLoadFile={onLoadFile}
      />

      <FileListOrganism></FileListOrganism>

      <ProcessedData onSeeEmployeeDetails={onSeeEmployeeDetails} data={processedData} show={showProcessedData} handleDownload={onDownload} handleSiigoFormat={handleSiigoFormat} fileNameId={fileNameId}></ProcessedData>


    </Container>
    
    </main>
  </div>
);

export default Template;
