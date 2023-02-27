import React, { useEffect } from 'react';
import { useState } from 'react';

const Test4 = () => {
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
  let [chngRcvry, setChngRcvry] = useState(Array(12).fill(0));
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
      let recovery = parseInt(chngRcvry[i]);
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
    setChngRcvry(Array(range + 1).fill(e.target.value));
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
  const checkInterest = () => {
    let yr = JSON.parse(localStorage.getItem('newYear'));
    for (let j = 0; j <= range; j++) {
      if (j === 0) {
        let mNo = parseInt(selectedMonth);
        let yeaR = parseInt(selectedYear);
        let dysInMonth = new Date(yeaR, mNo, 0).getDate();
        let daysLeftForMonthEnd = dysInMonth - selectedDay + 1;
        let instrstOftakenAmountForSameMonth = Math.round(
          (opBlnc * rate * daysLeftForMonthEnd) / yr[j].year
        );
        let newPricipalBalance = opBlnc + instrstOftakenAmountForSameMonth;
        yr[j].remainingBalance = newPricipalBalance - chngRcvry[j];
        let d =
          (yr[j].remainingBalance * rate * yr[j].noOfdaysInMonth) / yr[j].year;
        yr[j].percentagePerMonth = Math.round(d);
      } else {
        yr[j].remainingBalance =
          yr[j - 1].remainingBalance +
          yr[j - 1].percentagePerMonth -
          chngRcvry[j];
        let d =
          (yr[j].remainingBalance * rate * yr[j].noOfdaysInMonth) / yr[j].year;
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
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '20vh',
      }}
    >
      <input type="date" onChange={getDate} />
      <p>select upto 24 months</p>
      <input type="number" onChange={getRange} />
      <input
        type="number"
        // value={opBlnc}
        onChange={(e) => setOpBlnc(parseInt(e.target.value))}
      />
      <input type="number" value={rcvry} onChange={fixedRcvry} />
      <button onClick={calculatePeriod}>Calculate</button>
      {year
        ? year.map((item) => (
            <div key={item.index}>
              <li>{item.monthName}</li>
              <li>{item.year}</li>
              <li>{item.percentagePerMonth}</li>
              <li>{item.remainingBalance}</li>
              <li>
                <input
                  type="number"
                  value={chngRcvry[item.index]}
                  onChange={(e) => changeRcvryValue(item.index, e.target.value)}
                />
              </li>
              <hr />
            </div>
          ))
        : 'Wait till values filled'}
    </div>
  );
};

export default Test4;
