import React from 'react'
import { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState({user:'Safiullah Abbasi', age: 20});
  const [arr, setArr] = useState([10,20,30,40,50])

  // const btnClick = () => {
    // const newNum = { ...num };
    // newNum.user = 'Abdullah Abbasi';
    // setNum(newNum);
  // }

  const btnClick = () => {
    // const newArr = [ ...arr ];
    // // Delete Array
    // for (let x = 0; x < arr.length; x++) {
    //   newArr.pop();
    // }
    
    // //Add new Elements to the Array
    // let n = 60;
    // for (let x = 0; x < arr.length; x++) {
    //   newArr.push(n);
    //   n += 10;
    // }
    
    // setArr(newArr);
    setArr(prev=>([60,70,80,90,100]))
  }

  //Print all the value of array
  const printArr = () => {
    let string = "";
    for (let x = 0; x < arr.length; x++) {
     string += arr[x];
     string += "   ";
    }
    return string;
  }



  return (
    <div className='bg-black h-screen w-full text-white flex items-center justify-center flex-col'>
      <h1 className='text-4xl tracking-wide uppercase'>
        {/* {num.user}, {num.age} */}
        {printArr()}
      </h1> 
      <button onClick={btnClick} className='px-7 py-4 bg-white text-black m-10 rounded-2xl border-2 cursor-pointer hover:text-white hover:bg-black duration-500'>Change User!</button>
    </div>
  )
}

export default App