import React from 'react';
import { useState, useEffect } from 'react';
import './Urban.css';

const Urban = () => {
  let yearDefined = [
    { monthNo: 1, monthName: 'January' },
    { monthNo: 2, monthName: 'February' },
    { monthNo: 3, monthName: 'March' },
    { monthNo: 4, monthName: 'April' },
    { monthNo: 5, monthName: 'May' },
    { monthNo: 6, monthName: 'June' },
    { monthNo: 7, monthName: 'July' },
    { monthNo: 8, monthName: 'August' },
    { monthNo: 9, monthName: 'September' },
    { monthNo: 10, monthName: 'October' },
    { monthNo: 11, monthName: 'November' },
    { monthNo: 12, monthName: 'December' },
  ];
  let [range, setRange] = useState(null);
  let [date, setDate] = useState(null);
  let [year, setYear] = useState(null);
  let [remBlnc, setRemBlnc] = useState(Array(24).fill(0));
  let [rcvry, setRcvry] = useState(Array(24).fill(0));
  let [percentage] = useState(Array(24).fill(0));
  //====
  let [opBlnc, setOpBlnc] = useState(0);
  let [chngRcvry, setChngRcvry] = useState(Array(24).fill(0));
  const newYear = [];
  const rate = 0.1;
  //====
  let splitedDate, selectedYear, selectedMonth, selectedDay;
  if (date) {
    splitedDate = date.split('-');
    selectedYear = splitedDate[0];
    selectedMonth = splitedDate[1];
    selectedDay = splitedDate[2];
  }
  const getDate = (e) => {
    setDate(e.target.value);
  };
  const getRange = (e) => {
    if (e.target.value > 24) {
      alert("You can't enter above 24 for now!");
      window.location.reload();
    }
    setRange(e.target.value - 1);
  };
  const getMonthName = (mn) => {
    for (let i = 0; i < 12; i++) {
      if (mn === yearDefined[i].monthNo) {
        return yearDefined[i];
      }
    }
  };
  const calculatePeriod = () => {
    for (let i = 0; i <= range; i++) {
      let monthNo = i + parseInt(selectedMonth) + 1;
      let year = parseInt(selectedYear);
      if (monthNo > 12) {
        year = year + 1;
        monthNo = monthNo - 12;
        if (monthNo > 12) {
          monthNo = monthNo - 12;
        }
      }
      let mName = getMonthName(monthNo);
      let monthName = mName.monthName;
      let noOfdaysInMonth = new Date(year, monthNo, 0).getDate();
      let remainingBalance = remBlnc[i];
      let recovery = chngRcvry[i] ? parseInt(chngRcvry[i]) : 0;
      let percentagePerMonth = percentage[i];
      let index = i;
      newYear.push({
        index,
        monthName,
        monthNo,
        year,
        noOfdaysInMonth,
        remainingBalance,
        recovery,
        percentagePerMonth,
      });
    }
    setYear(newYear);
    localStorage.setItem('newYear', JSON.stringify(newYear));
    checkInterest();
  };
  const fixedRcvry = (e) => {
    setRcvry(e.target.value);
    console.log(rcvry);
    setChngRcvry(Array(24).fill(e.target.value));
  };
  const changeRcvryValue = (index, data) => {
    let da = chngRcvry;
    da.splice(index, 1, data);
    setChngRcvry(da);
    let yr = JSON.parse(localStorage.getItem('newYear'));
    yr[index].recovery = data;
    setYear(yr);
    localStorage.setItem('newYear', JSON.stringify(yr));
    checkInterest();
  };
  const daysInYear = (year) => {
    return (year % 4 === 0 && year % 100 > 0) || year % 400 === 0 ? 366 : 365;
  };
  const checkInterest = () => {
    let yr = JSON.parse(localStorage.getItem('newYear'));
    for (let j = 0; j <= range; j++) {
      if (j === 0) {
        let mNo = parseInt(selectedMonth);
        let yeaR = parseInt(selectedYear);
        let dysInMonth = new Date(yeaR, mNo, 0).getDate();
        let daysLeftForMonthEnd = dysInMonth - selectedDay + 1;
        let instrstOftakenAmountForSameMonth = Math.round(
          (opBlnc * rate * daysLeftForMonthEnd) / daysInYear(yr[j].year)
        );
        console.log(instrstOftakenAmountForSameMonth);
        let newPricipalBalance = opBlnc + instrstOftakenAmountForSameMonth;
        yr[j].remainingBalance = newPricipalBalance - yr[j].recovery;
        let d =
          (yr[j].remainingBalance * rate * yr[j].noOfdaysInMonth) /
          daysInYear(yr[j].year);
        yr[j].percentagePerMonth = Math.round(d);
      } else {
        yr[j].remainingBalance =
          yr[j - 1].remainingBalance +
          yr[j - 1].percentagePerMonth -
          chngRcvry[j];
        let d =
          (yr[j].remainingBalance * rate * yr[j].noOfdaysInMonth) /
          daysInYear(yr[j].year);
        yr[j].percentagePerMonth = Math.round(d);
      }
    }
    let z = [];
    for (let s = 0; s <= range; s++) {
      z = yr[s].remainingBalance;
    }
    setRemBlnc(z);
    setYear(yr);
  };
  useEffect(() => {}, [year]);
  return (
    <div className="test2Container">
      <div className="tableWrapper">
        <h2>Interest Calculator</h2>
        <div className="main">
          <span>
            <h4>Opening Balance</h4>
            <input
              type="number"
              onChange={(e) => setOpBlnc(parseInt(e.target.value))}
            />
          </span>
          <span>
            <h4>Recovery</h4>
            <input
              type="number"
              // value={rcvry}
              onChange={fixedRcvry}
            />
          </span>
          <span>
            <h4>Date in which loan granted</h4>
            <input type="date" onChange={getDate} />
          </span>
          <span>
            <h4>Enter required months</h4>
            <input type="number" onChange={getRange} />
          </span>
        </div>
        <button onClick={calculatePeriod}>Let's Check</button>
        <div className="columnWrapper">
          <ul>
            <li>
              <h4>Month</h4>
            </li>
            {year
              ? year.map((item) => <li key={item.index}>{item.monthName}</li>)
              : 'Loading'}
          </ul>
          <ul>
            <li>
              <h4>Interest</h4>
            </li>
            {year
              ? year.map((item) => (
                  <li key={item.index}>{item.percentagePerMonth}</li>
                ))
              : 'Loading'}
          </ul>
          {/* =======Recovery======= */}
          <ul>
            <li>
              <h4>Recovery</h4>
            </li>
            {year
              ? year.map((item) => (
                  <li key={item.index}>
                    <input
                      type="number"
                      value={chngRcvry[item.index]}
                      onChange={(e) =>
                        changeRcvryValue(item.index, parseInt(e.target.value))
                      }
                    />
                  </li>
                ))
              : 'Loading'}
          </ul>
          {/* =======balance======= */}
          <ul>
            <li>
              <h4>Balance</h4>
            </li>
            {year
              ? year.map((item) => (
                  <li key={item.index}>{item.remainingBalance}</li>
                ))
              : 'Loading'}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Urban;
