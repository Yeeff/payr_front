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

  onProcess,
  onDownload,
  processedData,
  showProcessedData,

  fileFormatErrors,

  showFormatErrosModal,
  handleFormatErrosModalClose

}) => (
  <div id="template">
    <header>
      <h1>Excel Data Processor</h1>
    </header>
    <main>
      <FileProcessingForm
        onFileChange={onFileChange}
        isFileUploaded={isFileUploaded}

        onDateChange={onDateChange}
        selectedDate={selectedDate}

        onLoadFile={onLoadFile}
      />

      <ModalTableOrganisms
        headers={['Error Code', 'Description']}
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
      >
      </FileRepresentation>

      <ProcessedData data={processedData} show={showProcessedData}></ProcessedData>


    </main>
  </div>
);

export default Template;
