import React, { useEffect, useState } from "react";

const App = () => {
  // const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(100);

  // useEffect(function(){
  //   console.log("Use Effect is Running ...");
  // }, [num2])

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  useEffect(function () {
    console.log("UseEffect is running...");
  }, [a,b]);

  return (
    <div>
      {/* <h1>num1 : {num1}</h1>
      <h1>num2 : {num2}</h1>
      <button
      onMouseEnter={() => {
        setNum1(num1+1)
      }}
      onMouseLeave={() => {
        setNum2(num2+10)
      }}
      >Hover</button> */}
      <h1>a : {a}</h1>
      <h1>b : {b}</h1>
      <button
        onClick={() => {
          setA(a + 1);
        }}
      >
        A
      </button>
      <button
        onClick={() => {
          setB(b - 1);
        }}
      >
        B
      </button>
    </div>
  );
};

export default App;
