import React, { useContext } from "react";

const FileSavingFormContext = React.createContext();

export function useFileSavingFormContext() {
    return useContext(FileSavingFormContext);
}

export function FileSavingFormProvider({ children, loding }) {

    return (
        <>
            <FileSavingFormContext.Provider value={{loding}}>
                {children}
            </FileSavingFormContext.Provider>
        </>
    );
}