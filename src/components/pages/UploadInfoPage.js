
import React, { useState } from 'react';
import Template from '../templates/Template';
import { uploadFile, fetchProcessedInfo } from '../../Services/FileServices';
import { parseISO, format } from 'date-fns';

const FIRST_DAY_OF_MONTH = 1;
const FIFTEENTH_DAY_OF_MONTH = 15;

const UploadInfoPage = () => {
  const [selectedDate, setSelectedDate] = useState();

  const [fileErrors, setFileErrors] = useState();
  const [file, setFile] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const [showFormatErrosModal, setShowFormatErrosModal] = useState(false);

  const handleFormatErrosModalClose = () => setShowFormatErrosModal(false);
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleDateChange = (event) => {
    const date = parseISO(event.target.value);
    const day = date.getDate();

    if (day !== FIRST_DAY_OF_MONTH && day !== FIFTEENTH_DAY_OF_MONTH) {
      alert('Please select the 1st or 15th of the month.');
      setSelectedDate('');
    } else {
      setSelectedDate(event.target.value);
    }
  };

  const handleProcess = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please upload a file first.');
      return
    }

    try {
      //setError(null); 
      const data = await fetchProcessedInfo(selectedDate);
      //setResponseData(data);
      console.log(data);
    } catch (err) {
      //setError('The attempt to process the data failed');
      //setResponseData(null);
      console.error('Error:', err);
    }
  };

  const handleDownload = () => {
    alert('Downloading processed file...');
  };

  const onLoadFile = async (event) => {
    event.preventDefault();

    if (!file) {
      alert('Please upload a file first.');
      return
    }

    try {
      const response = await uploadFile(file);
      setIsFileUploaded(true);
      setFileErrors();

    } catch (error) {
      if (error.response && error.response.data) {
        setFileErrors(error.response.data.items );
        setShowFormatErrosModal(true)
      } else {
        console.error('Unexpected error:', error.message);
      }
    }
  };

  return (
    <Template

      onFileChange={handleFileChange}
      isFileUploaded={isFileUploaded}
      file={file}

      onDateChange={handleDateChange}
      selectedDate={selectedDate}

      onProcess={handleProcess}
      onDownload={handleDownload}
      onLoadFile={onLoadFile}

      fileFormatErrors={fileErrors}

      showFormatErrosModal={showFormatErrosModal}
      handleFormatErrosModalClose={handleFormatErrosModalClose}
    />
  );
};

export default UploadInfoPage;
