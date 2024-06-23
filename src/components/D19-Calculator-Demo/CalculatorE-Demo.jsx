import { useState } from "react";
import { useEffect } from "react";
export function CalculatorEventDemo() {

    const [amount, setAmount] = useState(12000);
    const [year, setYear] = useState(1);
    const [rate, setRate] = useState(10);
    const [emi, setEmi] = useState(0);

    function handleAmountChange(e) {
        setAmount(e.target.value)
    }
    function handleYearChange(e) {
        setYear(e.target.value)
    }
    function handleRateChange(e) {
        setRate(e.target.value)
    }

    function CalculateClick() {
        var p = amount;
        var r = rate / 12 / 100;
        var n = year * 12;
        var result = p * r * Math.pow(1 + r, n) / Math.pow(1 + r, n) - 1;
        setEmi(result);
    }


    return (
        <div className="container-fluid bg-secondary p-4">
            <h1 className="d-flex align-items-center justify-content-center text-white">Personal Loan EMI Calculator</h1>
            <div className="bg-light p-4">
                <div className="row m-2">
                    <div className="col">
                        Amount you need &#8377; <input type="text" value={amount} />
                    </div>
                    <div className="col">
                        For<input className="me-1 ms-1" type="text" value={year} size="4" />Year
                    </div>
                    <div className="col">
                        Interest rate<input className="me-1 ms-1" type="text" size="4" value={rate} />%
                    </div>
                </div>
                <div className="row m-4">
                    <div className="col ">
                        &#8377; 12000<input type="range" min="12000" max="4000000" value={amount} onChange={handleAmountChange} /> &#8377; 40,00,000
                    </div>
                    <div className="col">
                        1 Year<input type="range" min="1" max="5" value={year} onChange={handleYearChange} /> 5 Years
                    </div>
                    <div className="col">
                        10%<input type="range" min="10%" step="0.01" value={rate} onChange={handleRateChange} />25%
                    </div>
                </div>
                <div className="row mt-4">
                    <div className=" col d-flex align-items-center justify-content-center">
                        <button className="btn btn-primary w-100" onClick={CalculateClick}>Calculate</button>
                    </div>
                </div>
                <div className="mt-4 row">
                    <p className="text-center">Your Monthly Installment is <span className="h3 text-primary">{Math.round(emi).toLocaleString('en-in', {style:'currency', currency:'INR'})}</span> for{year*12} months.</p>
                </div>
            </div>
        </div>
    )
}