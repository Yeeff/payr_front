import React, { useContext } from "react";

const ProcessedDataContext = React.createContext();

export function useProcessedDataContext() {
    return useContext(ProcessedDataContext);
}

export function ProcessedDataProvider({ children, loding }) {

    return (<>
        <ProcessedDataContext.Provider value={{ loding }}>
            {children}
        </ProcessedDataContext.Provider>

    </>);
}