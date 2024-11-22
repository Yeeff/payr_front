import React from 'react';
import FileUpload from '../molecules/FileUpload';
import FortnightControlledDatePicker from '../molecules/FortnightControlledDatePicker';

const FileProcessingForm = ({ onFileChange, isFileUploaded, onDateChange, selectedDate,isDateSelectable, onLoadFile }) => (
  <form>

    <FileUpload
      onLoadFile={onLoadFile}
      onFileChange={onFileChange}
      isFileUploaded={isFileUploaded} />

    <FortnightControlledDatePicker handleDateChange={onDateChange} selectedDate ={selectedDate} isDateSelectable={isDateSelectable}></FortnightControlledDatePicker>

  </form>
);

export default FileProcessingForm;
