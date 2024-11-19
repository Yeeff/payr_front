import React from 'react';
import FileUpload from '../molecules/FileUpload';
import FortnightControlledDatePicker from '../molecules/FortnightControlledDatePicker';

const FileProcessingForm = ({ onFileChange, isFileUploaded, onDateChange, selectedDate, onProcess, onDownload, onLoadFile }) => (
  <form>

    <FileUpload
      onLoadFile={onLoadFile}
      onFileChange={onFileChange}
      isFileUploaded={isFileUploaded} />

    <FortnightControlledDatePicker onDateChange={onDateChange} selectedDate ={selectedDate}></FortnightControlledDatePicker>

  </form>
);

export default FileProcessingForm;
