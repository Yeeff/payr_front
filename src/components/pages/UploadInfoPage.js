
import React, { useState } from 'react';
import Template from '../templates/Template';
import { uploadFile, processInfo, downloadFile, getFiles, deleteFile, downloaSiigodFile } from '../../Services/FileServices';
import { isValid } from 'date-fns';
import { FileListProvider } from '../../context/FileListContext';
import { ProcessedDataProvider } from '../../context/ProcessedDataContext';
import { FileSavingFormProvider } from '../../context/FileSavingFormContext'
import useModal from '../../hooks/useModal';

import ContentTypeModal from '../../utils/Constanst';

const FIRST_DAY_OF_MONTH = 1;
const FIFTEENTH_DAY_OF_MONTH = 15;

const UNPROCESSABLE_ENTITY_HTTP_ERROR = 422

const UploadInfoPage = () => {
  const [selectedDate, setSelectedDate] = useState();

  const [fileErrors, setFileErrors] = useState();
  const [file, setFile] = useState(null);
  const [fileNameId, setFileNameId] = useState();
  const [fileList, setFileList] = useState([]);

  const [processedData, setProcessedData] = useState();
  const [showProcessedData, setShowProcessedData] = useState(false);
  const [personPayrollDetails, setPersonPayrollDetails] = useState(false);


  const [isFileListLoding, setisFileListLoding] = useState(false);
  const [isDownlodingFile, setisDownlodingFile] = useState(false);
  const [isSavingFile, setisSavingFile] = useState(false);

  const [showModalByType, setShowModalByType] = useState(false);

  const handleModalClose = () => {
    setFileErrors();
    setShowModalByType(null);
  };
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const isDateSelectable = (date) => {
    if (!isValid(date)) return false;
    const day = date.getDate();
    return day === FIRST_DAY_OF_MONTH || day === FIFTEENTH_DAY_OF_MONTH;
  };

  const handleDateChange = (date) => {
    if (isDateSelectable(date)) {
      setSelectedDate(date);
    } else {
      alert('Please select the 1st or 15th of the month.');
    }
  };


  const getFilesFromApi = async () => {
    const response = await getFiles();
    setFileList(response.data);
  }

  const handleDeleteFile = (fileName) => {
    setisFileListLoding(true);

    deleteFile(fileName);
    getFilesFromApi();

    setisFileListLoding(false);
  }

  const handleProcess = async (fileName) => {

    setisFileListLoding(true);

    try {
      const response = await processInfo(fileName);
      setFileNameId(fileName);
      setProcessedData(response.data);
      setShowProcessedData(true);
    } catch (err) {
      console.error(err);
    } finally {
      setisFileListLoding(false);
    }
  };

  const handleDownload = async (fileNameId) => {
    setisDownlodingFile(true);

    try {
      const response = await downloadFile(fileNameId);

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'processed_file.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error(err);
    } finally {
      setisDownlodingFile(false);
    }
  };

  const handleSiigoFormat = async () => {
    setisDownlodingFile(true);

    try {
      const response = await downloaSiigodFile(fileNameId);

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'siigo-processed_file.xlsx');
      document.body.appendChild(link);
      link.click();
    } catch (err) {
      console.error(err);
    } finally {
      setisDownlodingFile(false);
    }
  }

  const onLoadFile = async (event) => {
    event.preventDefault();


    if (!file || !selectedDate) {
      alert('Por favor escoge un archivo y una fecha primero.');
      return
    }

    setisSavingFile(true);

    try {
      const response = await uploadFile(file, selectedDate);
      
      getFilesFromApi();

    } catch (error) {
      if (error.response) {
        if (error.response.status === UNPROCESSABLE_ENTITY_HTTP_ERROR) {

          const formatedToDataTable = Object.entries(error.response.data.items).map(([cell, description]) => ({
            cell,
            description
          }));

          onShowModalWithFileErrorList(formatedToDataTable);
          
        } else {
          console.error(`Error with status ${error.response.status}:`, error.response.data);
        }
      } else {
        console.error('Unexpected error:', error.message);
      }
    } finally {
      setisSavingFile(false);

    }

  };

  const onShowModalWithFileErrorList = (FormatedToDataTable)=>{
    setFileErrors(FormatedToDataTable);
    setShowModalByType(ContentTypeModal.ERROR_FILE_LIST);

  }

  const onShowModalWithEmployeeDetails = (personPayrollData) => {

    console.log(personPayrollData.sendOnClick)

    setPersonPayrollDetails(personPayrollData.sendOnClick);
    setShowModalByType(ContentTypeModal.EMPLOYEE_PAYROLL_DETAILS);
  };


  return (
    <FileListProvider onShowModalWithEmployeeDetails={onShowModalWithEmployeeDetails}
    fileList={fileList} handleProcess={handleProcess} onFirstLoad={getFilesFromApi} onDeleteFile={handleDeleteFile} loding={isFileListLoding}>
      <ProcessedDataProvider loding={isDownlodingFile}>
        <FileSavingFormProvider loding={isSavingFile}>

          {useModal(showModalByType, handleModalClose, fileErrors, personPayrollDetails)}

          <Template

            onFileChange={handleFileChange}
            file={file}
            onLoadFile={onLoadFile}

            onDateChange={handleDateChange}
            selectedDate={selectedDate}
            isDateSelectable={isDateSelectable}

            onDownload={handleDownload}
            handleSiigoFormat={handleSiigoFormat}
            fileNameId={fileNameId}
            processedData={processedData}
            showProcessedData={showProcessedData}

            onSeeEmployeeDetails={onShowModalWithEmployeeDetails}
          />
        </FileSavingFormProvider>
      </ProcessedDataProvider>
    </FileListProvider>

  );
};

export default UploadInfoPage;
