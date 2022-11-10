import { click } from "@testing-library/user-event/dist/click";
import React, { Children, createContext, useContext, useState } from "react";
/**
 *
 * Accepts a context object (the value returned from React.createContext)
 * and returns the current context value for that context. The current context
 * value is determined by the value prop of the nearest
 * <MyContext.Provider> above the calling component in the tree.
 *
 */

// create context
const StateContext = createContext();

// initial navbar state object
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// UseCOntext provider to apply in our index application
export const ContextProvider = ({ children }) => {
  // state to share in our application
  const [activeMenu, setActiveMenu] = useState(true);
  // clicked state
  const [isClicked, setIsClicked] = useState(initialState);
  // screen size state - at first We don't know the size
  const [screenSize, setScreenSize] = useState(undefined);
  // current color
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  // current mode
  const [currentMode, setCurrentMode] = useState("Light");
  // theme settings
  const [themeSettings, setThemeSettings] = useState(false);

  //////////////////////////// set states ////////////////////////////////////
  // buttons handleClick method
  const handleClick = (clicked) => {
    // change the state object parameter to true
    setIsClicked({ ...initialState, [clicked]: true });
  };
  // set color
  const setColor = (colorValue) => {
    // update state
    setCurrentColor(colorValue);
    // store in local storage to mantain the color after reload site
    localStorage.setItem("colorMode", colorValue);
    // close settings element
    setThemeSettings(false);
  };
  //set mode
  const setMode = (e) => {
    // update state
    setCurrentMode(e.target.value);
    // store in local storage to mantain the color after reload site
    localStorage.setItem("themeMode", e.target.value);
    // close settings element
    setThemeSettings(false);
  };

  // return a context provider passing state throw the value
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        
        isClicked,
        setIsClicked,
        handleClick,
        
        screenSize,
        setScreenSize,
        
        currentColor, 
        setCurrentColor,
        setColor,
        
        currentMode, 
        setCurrentMode,
        setMode,

        themeSettings, 
        setThemeSettings
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// context to access to the state inside the provider
export const useStateContext = () => useContext(StateContext);
