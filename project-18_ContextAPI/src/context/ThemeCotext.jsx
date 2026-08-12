import { createContext, useState } from "react";

export const ThemeDataContext = createContext();

const ThemeCotext = (props) => {

  const [theme, setTheme] = useState('Dark')

  return (
    <div>
      <ThemeDataContext.Provider value={[theme, setTheme]}>
        {props.children}
      </ThemeDataContext.Provider>
    </div>
  );
};

export default ThemeCotext;
