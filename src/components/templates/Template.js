import React from 'react';
import FileProcessingForm from '../organisms/FileProcessingForm';
import ProcessedData from '../organisms/ProcessedData';
import FileListOrganism from '../organisms/FileListOrganism';

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
  handleSiigoFormat,
  fileNameId,
  processedData,
  showProcessedData,

  onSeeEmployeeDetails

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

      <FileListOrganism></FileListOrganism>

      <ProcessedData onSeeEmployeeDetails={onSeeEmployeeDetails} data={processedData} show={showProcessedData} handleDownload={onDownload} handleSiigoFormat={handleSiigoFormat} fileNameId={fileNameId}></ProcessedData>


    </main>
  </div>
);

export default Template;
