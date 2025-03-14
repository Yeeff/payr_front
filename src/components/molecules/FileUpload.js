import React from 'react';
import InputFieldFile from '../atoms/InputFieldFile';

const FileUpload = ({ onFileChange, isFileUploaded }) => (
  <div>
    <InputFieldFile id="fileUpload" type="file" onChange={onFileChange} />
  </div>
);

export default FileUpload;
