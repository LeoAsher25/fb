import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLightTheme: true,
    lightTheme: {
      topnavBgColor: "#fff",
      bodyBgColor: "#f2f2f2",
      bgColorGray: "#e6e6e6",
      upPostInputBox: "#f2f2f2",
      colorGray: "#666",
      color: "#050505",
      borderColor: "#d0d0d0",
    },
    darkTheme: {
      topnavBgColor: "#242424",
      bodyBgColor: "#181818",
      bgColorGray: "#3a3a3a",
      upPostInputBox: "#3a3a3a",
      colorGray: "#bbb",
      color: "#e6e6e6",
      borderColor: "#404040",
    },
  });

  useEffect(() => {
    let localTheme = localStorage.getItem("Theme");
    if (localTheme) {
      setTheme(JSON.parse(localTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    let newTheme = { ...theme };
    newTheme.isLightTheme = !newTheme.isLightTheme;
    setTheme(newTheme);
  };

  const themeDatas = {
    theme,
    toggleTheme,
  };
  return (
    <ThemeContext.Provider value={themeDatas}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
