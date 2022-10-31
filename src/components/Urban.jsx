import React, { useState } from 'react';

const Urban = () => {
  let [opBlnc, setOpBlnc] = useState(0);
  let [rcvry, setRcvry] = useState(0);
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
  let checkInterest = () => {
    let mainBal = opBlnc - rcvry;
    let d1 = (mainBal * 0.1 * 30) / 365;
    setApril(d1);
    mainBal = mainBal + april - rcvry;
    let d2 = (mainBal * 0.1 * 31) / 365;
    setMay(d2);
    mainBal = mainBal + may - rcvry;
    let d3 = (mainBal * 0.1 * 30) / 365;
    setJune(d3);
    mainBal = mainBal + jun - rcvry;
    let d4 = (mainBal * 0.1 * 31) / 365;
    setJuly(d4);
    mainBal = mainBal + july - rcvry;
    let d5 = (mainBal * 0.1 * 30) / 365;
    setAugust(d5);
    mainBal = mainBal + augst - rcvry;
    let d6 = (mainBal * 0.1 * 31) / 365;
    setSeptember(d6);
    mainBal = mainBal + septmbr - rcvry;
    let d7 = (mainBal * 0.1 * 30) / 365;
    setOctober(d7);
    mainBal = mainBal + octbr - rcvry;
    let d8 = (mainBal * 0.1 * 31) / 365;
    setNovember(d8);
    mainBal = mainBal + nov - rcvry;
    let d9 = (mainBal * 0.1 * 30) / 365;
    setDecember(d9);
    mainBal = mainBal + dec - rcvry;
    let d10 = (mainBal * 0.1 * 31) / 365;
    setJan(d10);
    mainBal = mainBal + jan - rcvry;
    let d11 = (mainBal * 0.1 * 28) / 365;
    setFeb(d11);
    mainBal = mainBal + feb - rcvry;
    let d12 = (mainBal * 0.1 * 31) / 365;
    setMarch(d12);
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
                  <input
                    type="number"
                    value={rcvry}
                    onChange={(e) => setRcvry(e.target.value)}
                  />
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
              {/* ============== */}
              <tr>
                <td></td>
                <td></td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
                <td>
                  <input type="number" value={rcvry} />
                </td>
              </tr>
            </tbody>
            <button onClick={checkInterest}>Let's Check</button>
          </table>
        </div>
      </div>
    </>
  );
};

export default Urban;
