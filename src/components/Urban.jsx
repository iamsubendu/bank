import React, { useState } from 'react';

const Urban = () => {
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
    setApril(d);
    mainBal[1] = mainBal[0] + april - chngRcvry[1];
    let d1 = (mainBal[1] * 0.1 * 31) / 365;
    setMay(d1);
    mainBal[2] = mainBal[1] + may - chngRcvry[2];
    let d2 = (mainBal[2] * 0.1 * 30) / 365;
    setJune(d2);
    mainBal[3] = mainBal[2] + jun - chngRcvry[3];
    let d3 = (mainBal[3] * 0.1 * 31) / 365;
    setJuly(d3);
    mainBal[4] = mainBal[3] + july - chngRcvry[4];
    let d4 = (mainBal[4] * 0.1 * 30) / 365;
    setAugust(d4);
    mainBal[5] = mainBal[4] + augst - chngRcvry[5];
    let d5 = (mainBal[5] * 0.1 * 31) / 365;
    setSeptember(d5);
    mainBal[6] = mainBal[5] + septmbr - chngRcvry[6];
    let d6 = (mainBal[6] * 0.1 * 30) / 365;
    setOctober(d6);
    mainBal[7] = mainBal[6] + octbr - chngRcvry[7];
    let d7 = (mainBal[7] * 0.1 * 31) / 365;
    setNovember(d7);
    mainBal[8] = mainBal[7] + nov - chngRcvry[8];
    let d8 = (mainBal[8] * 0.1 * 30) / 365;
    setDecember(d8);
    mainBal[9] = mainBal[8] + dec - chngRcvry[9];
    let d9 = (mainBal[9] * 0.1 * 31) / 365;
    setJan(d9);
    mainBal[10] = mainBal[9] + jan - chngRcvry[10];
    let d10 = (mainBal[10] * 0.1 * 28) / 365;
    setFeb(d10);
    mainBal[11] = mainBal[10] + feb - chngRcvry[11];
    let d11 = (mainBal[11] * 0.1 * 31) / 365;
    setMarch(d11);
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
    <>
      <div className="urbanContainer">
        <h2>Interest Calculator</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Opening Balance</th>
                <th>Recovery</th>
                <th>April</th>
                <th>May</th>
                <th>June</th>
                <th>July</th>
                <th>August</th>
                <th>September</th>
                <th>October</th>
                <th>November</th>
                <th>December</th>
                <th>January</th>
                <th>February</th>
                <th>March</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="number"
                    value={opBlnc}
                    onChange={(e) => setOpBlnc(e.target.value)}
                  />
                </td>
                <td>
                  <input type="number" value={rcvry} onChange={fixedRcvry} />
                </td>
                <td>{april}</td>
                <td>{may}</td>
                <td>{jun}</td>
                <td>{july}</td>
                <td>{augst}</td>
                <td>{septmbr}</td>
                <td>{octbr}</td>
                <td>{nov}</td>
                <td>{dec}</td>
                <td>{jan}</td>
                <td>{feb}</td>
                <td>{march}</td>
              </tr>
              {/* =======Recovery======= */}
              <tr>
                <td>Recovery</td>
                <td></td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[0]}
                    onChange={(e) => changeRcvryValue(0, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[1]}
                    onChange={(e) => changeRcvryValue(1, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[2]}
                    onChange={(e) => changeRcvryValue(2, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[3]}
                    onChange={(e) => changeRcvryValue(3, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[4]}
                    onChange={(e) => changeRcvryValue(4, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[5]}
                    onChange={(e) => changeRcvryValue(5, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[6]}
                    onChange={(e) => changeRcvryValue(6, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[7]}
                    onChange={(e) => changeRcvryValue(7, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[8]}
                    onChange={(e) => changeRcvryValue(8, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[9]}
                    onChange={(e) => changeRcvryValue(9, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[10]}
                    onChange={(e) => changeRcvryValue(10, e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={chngRcvry[11]}
                    onChange={(e) => changeRcvryValue(11, e.target.value)}
                  />
                </td>
              </tr>
              {/* =======balance======= */}
              <tr>
                <td>Balance</td>
                <td></td>
                <td>{remBlnc[0]}</td>
                <td>{remBlnc[1]}</td>
                <td>{remBlnc[2]}</td>
                <td>{remBlnc[3]}</td>
                <td>{remBlnc[4]}</td>
                <td>{remBlnc[5]}</td>
                <td>{remBlnc[6]}</td>
                <td>{remBlnc[7]}</td>
                <td>{remBlnc[8]}</td>
                <td>{remBlnc[9]}</td>
                <td>{remBlnc[10]}</td>
                <td>{remBlnc[11]}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={checkInterest}>Let's Check</button>
        </div>
      </div>
    </>
  );
};

export default Urban;
