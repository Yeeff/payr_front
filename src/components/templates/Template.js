import React from 'react';
import FileProcessingForm from '../organisms/FileProcessingForm';
import ModalTableOrganisms from '../organisms/ModalTableOrganisms';
import FileRepresentation from '../molecules/FileRepresentation';

const Template = ({
  onFileChange,
  isFileUploaded,
  file,

  onDateChange,
  selectedDate,

  onProcess,
  onDownload,
  onLoadFile,

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

        onProcess={onProcess}
        onDownload={onDownload}
        onLoadFile={onLoadFile}
      />

      <ModalTableOrganisms
        headers={['Error Code', 'Description']}
        data={fileFormatErrors}
        modalTitle={"Errors"}

        showModal={showFormatErrosModal}
        handleClose={handleFormatErrosModalClose}
      ></ModalTableOrganisms>

      <FileRepresentation uploadedFile={file} show={isFileUploaded}></FileRepresentation>


    </main>
  </div>
);

export default Template;
