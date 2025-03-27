import { useMeasurement } from "@/context/MeasurementContext";

const Calculator = () => {
    const { isMetric } = useMeasurement();
    return <div>Using {isMetric ? "Metric" : "Imperial"} system</div>;
};

export default Calculator;
