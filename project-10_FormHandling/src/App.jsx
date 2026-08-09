import React from "react";
import { useState } from "react";

const App = () => {

  const [title, setTitle] = useState('');
  const [password, setPassword] = useState('')

  // Prevent Reloading
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    setTitle('');
    setPassword('');
  };

  return (
    <div className="h-screen w-full bg-black text-white flex items-center justify-center">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex items-center justify-between flex-col bg-gray-900 h-3/4 w-3/10 rounded-3xl px-4 py-8 gap-8 border-1"
      >
        <h1 className="text-4xl text-bold mt-5 mb-3">Login Form</h1>
        <input
          className="w-3/4 px-5 py-2 border-1 rounded-xl mb-[-45px]"
          type="text"
          name="username"
          id="username"
          placeholder="Enter You Username"
          value={title} 
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className="w-3/4 px-5 py-2 border-1 rounded-xl"
          type="password"
          name="password"
          id="password"
          placeholder="Enter Your Password"
          value={password} 
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="border-1 rounded-xl px-6 py-3 cursor-pointer hover:bg-white hover:text-gray-900 duration-500">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
