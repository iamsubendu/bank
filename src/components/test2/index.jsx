import React, { useState } from 'react';
import './index.css';

const Bank = () => {
  let [opBlnc, setOpBlnc] = useState(0);
  let [rcvry, setRcvry] = useState(0);
  let mainBal = Array(12).fill(0);
  let [remBlnc, setRemBlnc] = useState(Array(12).fill(0));
  let [chngRcvry, setChngRcvry] = useState(Array(12).fill(0));
  //===========================================================
  let [april, setApril] = useState(0);
  let [march, setMarch] = useState(0);
  let [feb, setFeb] = useState(0);
  let [jan, setJan] = useState(0);
  let [dec, setDecember] = useState(0);
  let [nov, setNovember] = useState(0);
  let [augst, setAugust] = useState(0);
  let [jun, setJune] = useState(0);
  let [july, setJuly] = useState(0);
  let [may, setMay] = useState(0);
  let [septmbr, setSeptember] = useState(0);
  let [octbr, setOctober] = useState(0);
  //===========================================================
  let checkInterest = () => {
    mainBal[0] = opBlnc - chngRcvry[0];
    let d = (mainBal[0] * 0.1 * 30) / 365;
    setApril(Math.round(d));
    mainBal[1] = mainBal[0] + april - chngRcvry[1];
    let d1 = (mainBal[1] * 0.1 * 31) / 365;
    setMay(Math.round(d1));
    mainBal[2] = mainBal[1] + may - chngRcvry[2];
    let d2 = (mainBal[2] * 0.1 * 30) / 365;
    setJune(Math.round(d2));
    mainBal[3] = mainBal[2] + jun - chngRcvry[3];
    let d3 = (mainBal[3] * 0.1 * 31) / 365;
    setJuly(Math.round(d3));
    mainBal[4] = mainBal[3] + july - chngRcvry[4];
    let d4 = (mainBal[4] * 0.1 * 30) / 365;
    setAugust(Math.round(d4));
    mainBal[5] = mainBal[4] + augst - chngRcvry[5];
    let d5 = (mainBal[5] * 0.1 * 31) / 365;
    setSeptember(Math.round(d5));
    mainBal[6] = mainBal[5] + septmbr - chngRcvry[6];
    let d6 = (mainBal[6] * 0.1 * 30) / 365;
    setOctober(Math.round(d6));
    mainBal[7] = mainBal[6] + octbr - chngRcvry[7];
    let d7 = (mainBal[7] * 0.1 * 31) / 365;
    setNovember(Math.round(d7));
    mainBal[8] = mainBal[7] + nov - chngRcvry[8];
    let d8 = (mainBal[8] * 0.1 * 30) / 365;
    setDecember(Math.round(d8));
    mainBal[9] = mainBal[8] + dec - chngRcvry[9];
    let d9 = (mainBal[9] * 0.1 * 31) / 365;
    setJan(Math.round(d9));
    mainBal[10] = mainBal[9] + jan - chngRcvry[10];
    let d10 = (mainBal[10] * 0.1 * 28) / 365;
    setFeb(Math.round(d10));
    mainBal[11] = mainBal[10] + feb - chngRcvry[11];
    let d11 = (mainBal[11] * 0.1 * 31) / 365;
    setMarch(Math.round(d11));
    setRemBlnc(mainBal);
  };
  const fixedRcvry = (e) => {
    setRcvry(e.target.value);
    setChngRcvry(Array(12).fill(e.target.value));
  };
  const changeRcvryValue = (index, data) => {
    let da = chngRcvry;
    da.splice(index, 1, data);
    setChngRcvry(da);
    checkInterest();
  };
  return (
    <div className="test2Container">
      <div className="tableWrapper">
        <h2>Interest Calculator</h2>
        <div className="main">
          <span>
            <h4>Opening Balance</h4>
            <input
              type="number"
              value={opBlnc}
              onChange={(e) => setOpBlnc(e.target.value)}
            />
          </span>
          <span>
            <h4>Recovery</h4>
            <input type="number" value={rcvry} onChange={fixedRcvry} />
          </span>
        </div>
        <button onClick={checkInterest}>Let's Check</button>
        <div className="columnWrapper">
          <ul>
            <li>
              <h4>Month</h4>
            </li>
            <li>April</li>
            <li>May</li>
            <li>June</li>
            <li>July</li>
            <li>August</li>
            <li>September</li>
            <li>October</li>
            <li>November</li>
            <li>December</li>
            <li>January</li>
            <li>February</li>
            <li>March</li>
          </ul>
          <ul>
            <li>
              <h4>Percentage</h4>
            </li>
            <li>{april}</li>
            <li>{may}</li>
            <li>{jun}</li>
            <li>{july}</li>
            <li>{augst}</li>
            <li>{septmbr}</li>
            <li>{octbr}</li>
            <li>{nov}</li>
            <li>{dec}</li>
            <li>{jan}</li>
            <li>{feb}</li>
            <li>{march}</li>
          </ul>
          {/* =======Recovery======= */}
          <ul>
            <li>
              <h4>Recovery</h4>
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[0]}
                onChange={(e) => changeRcvryValue(0, e.target.value)}
              />
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[1]}
                onChange={(e) => changeRcvryValue(1, e.target.value)}
              />
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[2]}
                onChange={(e) => changeRcvryValue(2, e.target.value)}
              />
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[3]}
                onChange={(e) => changeRcvryValue(3, e.target.value)}
              />
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[4]}
                onChange={(e) => changeRcvryValue(4, e.target.value)}
              />
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[5]}
                onChange={(e) => changeRcvryValue(5, e.target.value)}
              />
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[6]}
                onChange={(e) => changeRcvryValue(6, e.target.value)}
              />
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[7]}
                onChange={(e) => changeRcvryValue(7, e.target.value)}
              />
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[8]}
                onChange={(e) => changeRcvryValue(8, e.target.value)}
              />
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[9]}
                onChange={(e) => changeRcvryValue(9, e.target.value)}
              />
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[10]}
                onChange={(e) => changeRcvryValue(10, e.target.value)}
              />
            </li>
            <li>
              <input
                type="number"
                value={chngRcvry[11]}
                onChange={(e) => changeRcvryValue(11, e.target.value)}
              />
            </li>
          </ul>
          {/* =======balance======= */}
          <ul>
            <li>
              <h4>Balance</h4>
            </li>
            <li>{remBlnc[0]}</li>
            <li>{remBlnc[1]}</li>
            <li>{remBlnc[2]}</li>
            <li>{remBlnc[3]}</li>
            <li>{remBlnc[4]}</li>
            <li>{remBlnc[5]}</li>
            <li>{remBlnc[6]}</li>
            <li>{remBlnc[7]}</li>
            <li>{remBlnc[8]}</li>
            <li>{remBlnc[9]}</li>
            <li>{remBlnc[10]}</li>
            <li>{remBlnc[11]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bank;
