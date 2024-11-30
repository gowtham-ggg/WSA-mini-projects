import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("0");
      setResult("");
    } else if (value === "DEL") {
      setInput((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
    } else if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setInput((prev) => (prev === "0" ? value : prev + value));
    }
  };

  return (
    <div className="calculator-container">
      <div className="background-circle">
        <div className="calculator">
          <Display input={input} result={result} />
          <Button handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
