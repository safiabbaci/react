import React from "react";

const App = () => {
  const btnclicked = () => {
    console.log("Button is Clicked");
  };

  const mouseEnter = () => {
    console.log("Mouse is Entered");
  };

  function inputChanging(val) {
    console.log(val);
  }

  const scrolling = (elem) => {
    console.log("Page is Scrolling with speed : ", elem.deltaY);
    if (elem.deltaY > 0) {
      console.log("Scrolling Down");
    }
    else {
      console.log("Scrolling Up"); 
    }
    
  }

  return (
    <div>
      {/* <button className='p-3 m-3 border-1 cursor-pointer' onMouseEnter={mouseEnter} onClick={btnclicked}>Change User</button>
      <button className='p-3 m-3 border-1 cursor-pointer'  onClick={()=>{
        console.log("Button Clicked");
      }}>Explore More</button> */}

      {/* <input onChange={(elem) => {
        inputChanging(elem.target.value);
      }} className="border-1 m-3 p-1" type="text" placeholder="Enter You Name" /> */}

      {/* <div onWheel={(elem)=>{
        scrolling(elem)
      }} className="box">
        <div className="page1 h-screen w-full bg-[#111]"></div>
        <div className="page2 h-screen w-full bg-[#222]"></div>
        <div className="page3 h-screen w-full bg-[#333]"></div>
      </div> */}

       

    </div>
  );
};

export default App;
