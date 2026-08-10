import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [index, setIndex] = useState(1);
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setUserData(response.data);
  };

  useEffect(function () {
      getData();
    },[index],);

  let printUserData = (
    <h3 className="text-gray-400 text-lg tracking-widest font-semibold">Loading...</h3>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <div className="h-45 w-50 bg-white rounded overflow-hidden text-black">
            <img
              className="h-full w-full object-cover"
              src={elem.download_url}
            />
          </div>
          <h1 className="font-bold text-center text-lg text-white">
            {elem.author}
          </h1>
        </div>
      );
    });
  }

  return (
    <div className="bg-black min-h-screen w-full text-white">
      <div className="w-full min-h-[79.6vh] flex flex-wrap items-center justify-center gap-5 p-3 pt-7">
        {printUserData}
      </div>

      <div className="flex justify-center items-center gap-6 py-9.25">
        <button
          style={{
            opacity: index == 1 ? 0.5 : 1,
            cursor: index == 1 ? "default" : "pointer",
          }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
          className="px-7 py-3 bg-amber-400 rounded text-black hover:bg-amber-500 active:scale-95 duration-300 cursor-pointer"
        >
          Prev
        </button>
        <h1 className="text-lg font-semibold w-20 text-center">Page {index}</h1>
        <button
          style={{
            opacity: index == 99 ? 0.5 : 1,
            cursor: index == 99 ? "default" : "pointer",
          }}
          onClick={() => {
            if (index < 99) {
              setIndex(index + 1);
              setUserData([]);
            }
          }}
          className="px-7 py-3 bg-amber-400 rounded text-black hover:bg-amber-500 active:scale-95 duration-300 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
