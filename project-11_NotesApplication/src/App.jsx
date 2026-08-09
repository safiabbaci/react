import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    const copyTask = [...task];
    copyTask.push({ title, description });
    console.log(copyTask);

    setTask(copyTask);

    setTitle("");
    setDescription("");
  };

  const crossClick = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="w-full min-h-screen flex md:flex-row max-md:flex-col justify-center"
      >
        <div className="md:w-[45%] max-md:w-full flex flex-col items-center gap-5 p-10">
          <h1 className="text-3xl mb-[20px] font-medium">Notes Application</h1>
          <input
            className="font-medium w-full px-5 py-2 border-1 rounded outline-none max-md:w-[320px]"
            type="text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="font-medium w-full h-30 px-5 py-3 border-1 rounded outline-non max-md:w-[320px]"
            type="text"
            placeholder="Write Detail"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
          <button className="max-md:w-[320px] font-medium w-full px-5 py-2 border-1 rounded-xl width-content text-black bg-white cursor-pointer hover:bg-black hover:text-white outline-none duration-300 active:bg-gray-300 active:text-black active:scale-95">
            Add Notes
          </button>
        </div>
        <div className="md:w-[55%] sm:w-full flex flex-col items-start gap-5 p-10 border-white min-md:border-l-2 max-md:border-t-2">
          <h1 className="text-3xl mb-[20px] font-medium">Recent Notes</h1>
          <div className="min-md:max-h-110 grid min-lg:grid-cols-3 min-md:grid-cols-2 min-sm:grid-cols-3 max-sm:grid-cols-2 w-full gap-5 overflow-auto max-md:overflow-visible scrollbar-gutter-stable">
            {task.map(function (elem, idx) {
              return (
                <div
                  key={idx}
                  className="relative h-52 bg-white text-black rounded-2xl p-3"
                >
                  <div
                    onClick={() => {
                      crossClick(idx);
                    }}
                    className="absolute top-2 right-2 flex text-xl items-center justify-center h-8 w-8 rounded-full cursor-pointer text-black border-3 active:scale-90 duration-300"
                  >
                    X
                  </div>
                  <h1 className="uppercase text-[18px] mb-[10px] font-bold">
                    {elem.title}
                  </h1>
                  <p className="text-gray-600">{elem.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
