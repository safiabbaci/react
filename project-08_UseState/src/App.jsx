import React from "react";import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="flex items-center justify-center flex-col mt-5">
      <h1 className="rounded-3xl text-[300px] text-white text-center width-content">
        {count}
      </h1>
      <div className="flex items-center justify-between mt-5">
        <button onClick={increaseCount} className="mx-3 uppercase tracking-[3px] px-8 py-5 text-white rounded-xl cursor-pointer border-2 hover:text-black hover:bg-white duration-500">Increase</button>
        <button onClick={decreaseCount} className="mx-3 uppercase tracking-[3px] px-8 py-5 text-white rounded-xl cursor-pointer border-2 hover:text-black hover:bg-white duration-500">Decrease</button>
        <button onClick={resetCount} className="mx-3 uppercase tracking-[3px] px-8 py-5 text-white rounded-xl cursor-pointer border-2 hover:text-black hover:bg-white duration-500">Reset</button>
      </div>
    </div>
  );
};

// const App = () => {
//   const [a, setA] = useState(20);
//   const [user, setUser] = useState('Safiullah Abbasi');
//   const [arr, setArr] = useState([1,2,3,4,5]);

//   const changeValue = () => {
//     setA(30);
//     setUser('Abdullah Abbasi');
//     setArr([6,7,8,9,10]);
//   }
//   return (
//     <div>
//       <h1 className='px-4 py-2 m-5 border-1 text-center'>Value of a is {a} <br /> Value of User is {user} <br />Value of Array is {arr}</h1>
//       <button onClick={changeValue} className='cursor-pointer px-4 py-2 m-5 border-1'>Change Values</button>
//     </div>
//   )
// }

export default App;
