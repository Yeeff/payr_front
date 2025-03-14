import React, {useContext} from "react";

const FileListContext = React.createContext();

export function useFileContext(){
    return useContext(FileListContext);
}

export function FileListProvider({ onShowModalWithEmployeeDetails,children, fileList, handleProcess, onFirstLoad, onDeleteFile, loading }) {
    
    return (<>
    <FileListContext.Provider value={{onShowModalWithEmployeeDetails, fileList, handleProcess, onFirstLoad, onDeleteFile, loading}}>
        {children}
    </FileListContext.Provider>

    </>);
}