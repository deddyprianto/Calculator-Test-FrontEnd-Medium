import React, { useState } from "react";
import "./Calculator.css";
import { CheckBoxOutlined } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

function Calculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  const [err3, setErr3] = useState(false);
  const [hasil, setHasil] = useState(0);
  // function Tombol Operator
  const operatorTambah = (e) => {
    e.preventDefault();
    if (!input2) {
      setErr2(true);
    }
    if (!input3) {
      setErr3(true);
    }
    if (input1.length != 0 && input2.length != 0) {
      setErr2(false);
      const valInput1 = parseInt(input1);
      const valInput2 = parseInt(input2);
      setHasil(valInput1 + valInput2);
    }
    if (input1.length != 0 && input2.length != 0 && input3.length != 0) {
      setErr1(false);
      setErr2(false);
      setErr3(false);
      const valInput1 = parseInt(input1);
      const valInput2 = parseInt(input2);
      const valInput3 = parseInt(input3);
      setHasil(valInput1 + valInput2 + valInput3);
    }
  };
  const operatorKurang = (e) => {
    e.preventDefault();
    if (!input2) {
      setErr2(true);
    }
    if (!input3) {
      setErr3(true);
    }
    if (input1.length != 0 && input2.length != 0) {
      setErr2(false);
      const valInput1 = parseInt(input1);
      const valInput2 = parseInt(input2);
      setHasil(valInput1 - valInput2);
    }
    if (input1.length != 0 && input2.length != 0 && input3.length != 0) {
      setErr1(false);
      setErr2(false);
      setErr3(false);
      const valInput1 = parseInt(input1);
      const valInput2 = parseInt(input2);
      const valInput3 = parseInt(input3);
      setHasil(valInput1 - valInput2 - valInput3);
    }
  };
  const operatorKali = (e) => {
    e.preventDefault();
    if (!input2) {
      setErr2(true);
    }
    if (!input3) {
      setErr3(true);
    }
    if (input1.length != 0 && input2.length != 0) {
      setErr2(false);
      const valInput1 = parseInt(input1);
      const valInput2 = parseInt(input2);
      setHasil(valInput1 * valInput2);
    }
    if (input1.length != 0 && input2.length != 0 && input3.length != 0) {
      setErr1(false);
      setErr2(false);
      setErr3(false);
      const valInput1 = parseInt(input1);
      const valInput2 = parseInt(input2);
      const valInput3 = parseInt(input3);
      setHasil(valInput1 * valInput2 * valInput3);
    }
  };

  const operatorBagi = (e) => {
    e.preventDefault();
    if (!input2) {
      setErr2(true);
    }
    if (!input3) {
      setErr3(true);
    }
    if (input1.length != 0 && input2.length != 0) {
      setErr2(false);
      const valInput1 = parseInt(input1);
      const valInput2 = parseInt(input2);
      setHasil(valInput1 / valInput2);
    }
    if (input1.length != 0 && input2.length != 0 && input3.length != 0) {
      setErr1(false);
      setErr2(false);
      setErr3(false);
      const valInput1 = parseInt(input1);
      const valInput2 = parseInt(input2);
      const valInput3 = parseInt(input3);
      setHasil(valInput1 / valInput2 / valInput3);
    }
  };
  return (
    <div className="container__Callculator">
      <h1>Callculator App</h1>
      {/* input */}
      <div className="container__Input1">
        <input type="number" onChange={(e) => setInput1(e.target.value)} />
        {input1 && (
          <CheckBoxOutlined style={{ color: green[500] }} className="icon" />
        )}
        {/* text error */}
        {err1 && <p>error, harap isi field ini dengan angka</p>}
      </div>
      <div className="container__Input2">
        <input type="number" onChange={(e) => setInput2(e.target.value)} />
        {input2 && (
          <CheckBoxOutlined style={{ color: green[500] }} className="icon" />
        )}
        {err2 && <p>error, harap isi field ini dengan angka</p>}
      </div>
      <div className="container__Input3">
        <input type="number" onChange={(e) => setInput3(e.target.value)} />
        {input3 && (
          <CheckBoxOutlined style={{ color: green[500] }} className="icon" />
        )}
        {err3 && <p>error, harap isi field ini dengan angka</p>}
      </div>
      {/* button */}
      <div className="container__Button">
        <Button variant="outlined" color="primary" onClick={operatorTambah}>
          +
        </Button>
        <Button variant="outlined" color="primary" onClick={operatorKurang}>
          -
        </Button>
        <Button variant="outlined" color="primary" onClick={operatorKali}>
          x
        </Button>
        <Button variant="outlined" color="primary" onClick={operatorBagi}>
          /
        </Button>
      </div>
      <hr />
      <div className="container__Hasil">
        <h3>Hasil: </h3>
        <p>{hasil}</p>
      </div>
    </div>
  );
}

export default Calculator;
