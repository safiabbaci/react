import React, { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeCotext";

const Button = () => {
    const [theme, setTheme] = useContext(ThemeDataContext);
  const changeTheme = () => {
    if (theme == "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <button
        onClick={changeTheme}
        className="px-4 py-2 bg-cyan-800 rounded m-4 cursor-pointer hover:bg-cyan-900 active:scale-95 duration-300"
      >
        Change Theme
      </button>
    </div>
  );
};

export default Button;
