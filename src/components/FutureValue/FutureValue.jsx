// import React, { useState } from "react";
// import style from './FutureValue.module.css';
// // import PortfolioStats from '../PortfolioStats/PortfolioStats';

// const FutureValue = () => {


//   // FORMULA
// /*

// A = (PMT [((1+r)**n-1)/r])(1+r)


// currentValue    P = The principal investment (the initial deposit or amount), as a dollar value
// fvDca           PMT = The monthly repayment
// futureValue     A = The future value of the investment/loan, including interest, as a dollar value
// realReturn      r = the annual interest rate, as a percent
// 1               n = the number of times that interest is compounded per year, e.g. 12 times per year is equivalent to compounded monthly
// fvYears         t = the number of years the money is invested or borrowed for, in years

// let futureValue = (fvDCA*(((1+returnValue)**12(-1)/12))*(1+returnValue);


// */ 

//     // State

//     let [currentValue, setCurrentValue] = useState(0)
//     let [returnValue, setReturnValue] = useState(0)
//     let [fvYears, setFvYears] = useState(0)
//     // const [fvDca, setFvDca] = useState(0)
//     let [futureValue, setFutureValue] = useState(0)

//     let realReturn = (returnValue / 100); // Return rate in %

//     let calcFutureValue = (event) => {
//       //prevent submitting
//       event.preventDefault()

//       if (currentValue === 0 || returnValue === 0 || fvYears === 0) {
//       // if (currentValue === 0 || returnValue === 0 || fvYears === 0 || fvDca === 0) {
//         alert('Please enter valid data...')
//       } else {

//         futureValue = currentValue * (1 + ((realReturn) /12),12 * fvYears)/100;

//         console.log(futureValue);

//         setFutureValue(futureValue.toFixed(2))
//       }
//     }


//     return (
//         <div className={style.container}>
//           {/* <div className={style.headingContainer}>
//             <PortfolioStats />
//           </div> */}


//         <div className={style.portfolio}>

//           <div className={style.fvContainer}>
//             <h1 className={style.fvTitle}>Future Value Calculator</h1>

//             <form onSubmit={calcFutureValue}>

//               <div className={style.inputContainer}> {/* Current Value */}
//                 <label for='fvValue'>Current Investment</label>
//                 <input id="CIV" type="number" name="fvValue" value={currentValue} onChange={(event) => setCurrentValue(event.target.value)} />
//               </div>

//               <div className={style.inputContainer}> {/* Return % Expected */}
//                 <label for='fvReturn'>Expected Return %</label>
//                 <input type="number" name="fvReturn" step="0.1" value={returnValue} onChange={(event) => setReturnValue(event.target.value)} />
//               </div>

//               <div className={style.inputContainer}> {/* Time Invested (In Years) */}
//                 <label for='fvYears'>Years Invested</label>
//                 <input type="number" name="fvYears" value={fvYears} onChange={(event) => setFvYears(event.target.value)} />
//               </div>

//               {/* <div className={style.inputContainer}> Recurring Investment (Monthly) 
//                 <label for='fvDca'>Monthly Recurring Investment</label>
//                 <input type="number" name="fvDca" value={fvDca} onChange={(event) => setFvDca(event.target.value)} />
//               </div> */}

//               <div>
//                 <button className={style.submitBtn} type="submit">Submit</button>
//               </div>

//               <div>

//                 <h1 className={style.fvAmount}>Future Value: {futureValue}</h1>

//               </div>

//             </form>
//           </div>

//         </div>
//       </div>
//     );
// };

// export default FutureValue;
