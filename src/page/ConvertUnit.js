
import styles from "../css/ConvertUnit.module.css"
import React from "react";

function ConvertUnit() {
    const [numInput, setNumInput] = React.useState(0);
    const [result, setResult] = React.useState(0);
    const [fromUnit, setFromUnit] = React.useState("cm");
    const [toUnit, setToUnit] = React.useState("m");

    function convertClick() {
        if (fromUnit === "cm" && toUnit === "m") {
            setResult(numInput / 100);
        } else if (fromUnit === "cm" && toUnit === "inch") {
            setResult(numInput / 2.54);
        } else if (fromUnit === "m" && toUnit === "cm") {
            setResult(numInput * 100);
        } else if (fromUnit === "m" && toUnit === "inch") {
            setResult(numInput * 39.37);
        } else if (fromUnit === "inch" && toUnit === "cm") {
            setResult(numInput * 2.54);
        } else if (fromUnit === "inch" && toUnit === "m") {
            setResult(numInput / 39.37);
        } else {
            setResult(parseFloat(numInput));
        }
    }

    return (
        <>
        <div className="container">
            <div className="row vh-100 d-flex align-items-center">
                <div className="offset-2 col-8">
                    <div className="card">
                        <div className="card-header text-center bg-primary text-white">
                            <h1 className={`${styles.unitRed} ${styles.fs50}`}>Convert Unit</h1>
                        </div>
                        <div className="card-body">
                            <div className="row mb-4">
                                <div className="offset-2 col-2 d-flex align-items-center">
                                    <label htmlFor="">From :</label>
                                </div>
                                <div className="col-3">
                                    <input
                                        className="form-control"
                                        id="numInput"
                                        type="number"
                                        value={numInput}
                                        placeholder="Enter value"
                                        onChange={(event) => {
                                            setNumInput(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="col-3">
                                    <select
                                        className="form-select"
                                        value={fromUnit}
                                        onChange={(event) => {
                                            setFromUnit(event.target.value);
                                            setResult(0);
                                        }}
                                    >
                                        <option value="cm">cm</option>
                                        <option value="m">m</option>
                                        <option value="inch">inch</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="offset-2 col-2 d-flex align-items-center">
                                    <label htmlFor="">To:</label>
                                </div>
                                <div className="col-3">
                                    <select
                                        className="form-select"
                                        name=""
                                        id=""
                                        onChange={(event) => {
                                            setToUnit(event.target.value);
                                            setResult(0);
                                        }}
                                    >
                                        <option value="m">m</option>
                                        <option value="cm">cm</option>
                                        <option value="inch">inch</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="offset-4 col-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={convertClick}
                                    >
                                        Convert
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="offset-2 col">
                                    <h4>
                                        Result: {result === 0 && result}
                                        {result !== 0 && result.toFixed(2)}{" "}
                                        {toUnit}
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}
export default ConvertUnit;
