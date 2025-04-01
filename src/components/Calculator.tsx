import { useState } from "react";
import { useMeasurement } from "@/context/MeasurementContext";

const RunningCalculator: React.FC = () => {
    const { isMetric } = useMeasurement();
    const [time, setTime] = useState<number>(0); // in minutes
    const [distance, setDistance] = useState<number>(0); // in km or miles
    const [pace, setPace] = useState<number>(0); // min per km or mile

    const calculatePace = () => {
        if (distance > 0) {
            setPace(time / distance);
        }
    };

    const calculateTime = () => {
        if (pace > 0) {
            setTime(distance * pace);
        }
    };

    const calculateDistance = () => {
        if (pace > 0) {
            setDistance(time / pace);
        }
    };

    return (
        <div className="max-w-lg mx-auto mt-10 p-6 border rounded-lg shadow">
            <h2 className="text-xl font-semibold text-center">
                Running Calculator
            </h2>
            <p className="text-center">
                Using {isMetric ? "Metric" : "Imperial"} system
            </p>

            <div className="mt-4">
                <label className="block font-medium">Time (minutes)</label>
                <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={time}
                    onChange={(e) => setTime(Number(e.target.value))}
                    onBlur={calculateDistance}
                />
            </div>

            <div className="mt-4">
                <label className="block font-medium">
                    Distance ({isMetric ? "km" : "miles"})
                </label>
                <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={distance}
                    onChange={(e) => setDistance(Number(e.target.value))}
                    onBlur={calculatePace}
                />
            </div>

            <div className="mt-4">
                <label className="block font-medium">
                    Pace (min per {isMetric ? "km" : "mile"})
                </label>
                <input
                    type="number"
                    className="w-full p-2 border rounded"
                    value={pace}
                    onChange={(e) => setPace(Number(e.target.value))}
                    onBlur={calculateTime}
                />
            </div>
        </div>
    );
};

export default RunningCalculator;
