import React from 'react';
import InputFieldFile from '../atoms/InputFieldFile';
import Button from '../atoms/Button';

const FileUpload = ({onLoadFile, onFileChange, isFileUploaded }) => (
  <div>
    <label htmlFor="fileUpload">Upload Excel File</label>
    <InputFieldFile id="fileUpload" type="file" onChange={onFileChange}/>
    <Button onClick={onLoadFile}>Load</Button>
    {isFileUploaded && <p>File uploaded successfully</p>}
  </div>
);

export default FileUpload;
