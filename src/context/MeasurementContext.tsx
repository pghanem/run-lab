"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface MeasurementContextType {
    isMetric: boolean;
    toggleMeasurement: () => void;
}

const MeasurementContext = createContext<MeasurementContextType | undefined>(
    undefined,
);

export const MeasurementProvider = ({ children }: { children: ReactNode }) => {
    const [isMetric, setIsMetric] = useState(true);

    const toggleMeasurement = () => setIsMetric((prev) => !prev);

    return (
        <MeasurementContext.Provider value={{ isMetric, toggleMeasurement }}>
            {children}
        </MeasurementContext.Provider>
    );
};

export const useMeasurement = () => {
    const context = useContext(MeasurementContext);
    if (!context) {
        throw new Error(
            "useMeasurement must be used within a MeasurementProvider",
        );
    }
    return context;
};
