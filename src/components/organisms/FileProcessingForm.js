import React from 'react';
import FileUpload from '../molecules/FileUpload';
import FortnightControlledDatePicker from '../molecules/FortnightControlledDatePicker';
import LoderSpinner from '../atoms/LoderSpinner';
import { useFileSavingFormContext } from '../../context/FileSavingFormContext';

const FileProcessingForm = ({ onFileChange, isFileUploaded, onDateChange, selectedDate,isDateSelectable, onLoadFile }) => {

  const {loding} = useFileSavingFormContext();


  return (
    <form>
  
      <LoderSpinner loding={loding}></LoderSpinner>
  
      <FileUpload
        onLoadFile={onLoadFile}
        onFileChange={onFileChange}
        isFileUploaded={isFileUploaded} />
  
      <FortnightControlledDatePicker handleDateChange={onDateChange} selectedDate ={selectedDate} isDateSelectable={isDateSelectable}></FortnightControlledDatePicker>
  
    </form>
  );
}


export default FileProcessingForm;
