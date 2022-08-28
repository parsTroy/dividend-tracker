import React, { useState } from "react";
import style from './FutureValue.module.css';
import PortfolioStats from '../PortfolioStats/PortfolioStats';

const FutureValue = () => {

    // State

    const [currentValue, setCurrentValue] = useState(0)
    const [returnValue, setReturnValue] = useState(0)
    const [fvYears, setFvYears] = useState(0)
    const [fvDca, setFvDca] = useState(0)
    const [futureValue, setFutureValue] = useState(0)
    const realReturn = (returnValue / 100);

    let calcFutureValue = (event) => {
      //prevent submitting
      event.preventDefault()

      if (currentValue === 0 || returnValue === 0 || fvYears === 0 || fvDca === 0) {
        alert('Please enter valid data...')
      } else {
        let dca = ((fvDca*12) + currentValue)
        let futureValue = (dca * realReturn)*fvYears
        setFutureValue(futureValue.toFixed(2))
      }
    }


    return (
        <div className={style.container}>
          <div className={style.headingContainer}>
            <PortfolioStats />
          </div>


        <div className={style.portfolio}>

          <div className={style.fvContainer}>
            <h1 className={style.fvTitle}>Future Value Calculator</h1>

            <form onSubmit={calcFutureValue}>

              <div className={style.inputContainer}>
                <label for='fvValue'>Current Investment</label>
                <input id="CIV" type="number" name="fvValue" value={currentValue} onChange={(event) => setCurrentValue(event.target.value)} />
              </div>

              <div className={style.inputContainer}>
                <label for='fvReturn'>Expected Return %</label>
                <input type="number" name="fvReturn" step="0.1" value={returnValue} onChange={(event) => setReturnValue(event.target.value)} />
              </div>

              <div className={style.inputContainer}>
                <label for='fvYears'>Years Invested</label>
                <input type="number" name="fvYears" value={fvYears} onChange={(event) => setFvYears(event.target.value)} />
              </div>

              <div className={style.inputContainer}>
                <label for='fvDca'>Monthly Recurring Investment</label>
                <input type="number" name="fvDca" value={fvDca} onChange={(event) => setFvDca(event.target.value)} />
              </div>

              <div>
                <button className={style.submitBtn} type="submit">Submit</button>
              </div>

              <div>

                <h1 className={style.fvAmount}>Future Value: {futureValue}</h1>

              </div>

            </form>
          </div>

        </div>
      </div>
    );
};

export default FutureValue;
