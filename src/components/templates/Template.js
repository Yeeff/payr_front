import React from 'react';
import FileProcessingForm from '../organisms/FileProcessingForm';
import ModalTableOrganisms from '../organisms/ModalTableOrganisms';
import FileRepresentation from '../molecules/FileRepresentation';
import ProcessedData from '../organisms/ProcessedData';

const Template = ({
  onFileChange,
  isFileUploaded,
  file,
  onLoadFile,

  onDateChange,
  selectedDate,
  isDateSelectable,

  onProcess,
  onDownload,
  processedData,
  showProcessedData,
  showDowloadButton,

  fileFormatErrors,

  showFormatErrosModal,
  handleFormatErrosModalClose

}) => (
  <div id="template">
    <header>
      <h1>Extraccion de recargos y horas extras</h1>
    </header>
    <main>
      <FileProcessingForm
        onFileChange={onFileChange}
        isFileUploaded={isFileUploaded}
        isDateSelectable={isDateSelectable}

        onDateChange={onDateChange}
        selectedDate={selectedDate}

        onLoadFile={onLoadFile}
      />

      <ModalTableOrganisms
        headers={{
          cell:"Celda",
          description:"Descripcion"
        }}
        data={fileFormatErrors}
        modalTitle={"Errors"}

        showModal={showFormatErrosModal}
        handleClose={handleFormatErrosModalClose}
      ></ModalTableOrganisms>

      <FileRepresentation
        uploadedFile={file}
        show={isFileUploaded}
        onProcessFile={onProcess}
        onDownload={onDownload}
        showDowloadButton={showDowloadButton}
      >
      </FileRepresentation>

      <ProcessedData data={processedData} show={showProcessedData}></ProcessedData>


    </main>
  </div>
);

export default Template;
