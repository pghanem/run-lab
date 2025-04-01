import { useState } from "react";
import { useMeasurement } from "@/context/MeasurementContext";

const RunningCalculator: React.FC = () => {
    const { isMetric } = useMeasurement();
    const [time, setTime] = useState("");
    const [distance, setDistance] = useState("");
    const [pace, setPace] = useState("");

    const updateValues = (
        field: "time" | "distance" | "pace",
        value: string,
    ) => {
        if (isNaN(Number(value)) || Number(value) <= 0) return;

        if (field === "time") {
            setTime(value);
            if (distance)
                setPace((parseFloat(value) / parseFloat(distance)).toFixed(2));
            if (pace)
                setDistance((parseFloat(value) / parseFloat(pace)).toFixed(2));
        } else if (field === "distance") {
            setDistance(value);
            if (time)
                setPace((parseFloat(time) / parseFloat(value)).toFixed(2));
            if (pace)
                setTime((parseFloat(value) * parseFloat(pace)).toFixed(2));
        } else if (field === "pace") {
            setPace(value);
            if (time)
                setDistance((parseFloat(time) / parseFloat(value)).toFixed(2));
            if (distance)
                setTime((parseFloat(value) * parseFloat(distance)).toFixed(2));
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-4 border rounded-lg shadow-md bg-white space-y-4 text-center">
            <h2 className="text-xl font-semibold">Running Calculator</h2>
            <p>Using {isMetric ? "Metric" : "Imperial"} system</p>

            <div>
                <label className="block font-medium">Time (minutes)</label>
                <input
                    type="text"
                    className="w-full p-2 border rounded text-center"
                    value={time}
                    onChange={(e) => updateValues("time", e.target.value)}
                    placeholder="Enter time"
                />
            </div>

            <div>
                <label className="block font-medium">
                    Distance ({isMetric ? "km" : "miles"})
                </label>
                <input
                    type="text"
                    className="w-full p-2 border rounded text-center"
                    value={distance}
                    onChange={(e) => updateValues("distance", e.target.value)}
                    placeholder="Enter distance"
                />
            </div>

            <div>
                <label className="block font-medium">
                    Pace (min per {isMetric ? "km" : "mile"})
                </label>
                <input
                    type="text"
                    className="w-full p-2 border rounded text-center"
                    value={pace}
                    onChange={(e) => updateValues("pace", e.target.value)}
                    placeholder="Enter pace"
                />
            </div>
        </div>
    );
};

export default RunningCalculator;
