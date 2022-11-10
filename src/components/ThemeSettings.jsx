// Sidebar from TooltipComponent 'settings' button

import React from "react";

// icons
import { MdOutlineCancel } from "react-icons/md";
import { BsCheck } from "react-icons/bs";
// ToolTip - popus
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

// data- theme colors
import { themeColors } from "../data/dummy";

// state context
import { useStateContext } from "../contexts/ContextProvider";

const ThemeSettings = () => {
  // states
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } =
    useStateContext();

  return (
    <>
      {/* lateral orientation */}
      <div className="bg-half-transparent fixed w-screen nav-item top-0 right-0">
        <div className="float-right h-screen dark:bg-main-dark-bg dark:text-gray-400 bg-white dark:[#484B52] w-400">
          {/* sidebar settings */}
          <div className="flex justify-between items-center p-4 ml-4">
            <p className="font-semibold text-xl">Settings</p>
            {/* close sidebar button */}
            <button
              className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
              type="button"
              // When button is pressed We update themeSettings state to false to close
              onClick={() => setThemeSettings(false)}
              style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            >
              {/* Settings icon */}
              <MdOutlineCancel />
            </button>
          </div>

          {/* Theme Options */}
          <div className="flex-col border-t-1 border-color p-4 ml-4">
            <p className="font-semibold text-lg">Theme Options</p>
            {/* Dark and Light Theme */}
            <div className="mt-4">
              <input
                className="cursor-pointer"
                type={"radio"}
                id={"light"}
                name={"theme"}
                value={"Light"}
                // To change mode we call the following arrow function sending the input's value
                onChange={setMode}
                checked={currentMode === 'Light'}
              />
              <label htmlFor="light" className="ml-2 text-md cursor-pointer">
                Light
              </label>
            </div>
            <div className="mt-4">
              <input
                className="cursor-pointer"
                type={"radio"}
                id={"dark"}
                name={"theme"}
                value={"Dark"}
                // To change mode we call the following arrow function sending the input's value
                onChange={setMode}
                checked={currentMode === 'Dark'}
              />
              <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
                Dark
              </label>
            </div>
          </div>

          {/* Color Themes */}
          <div className="flex-col border-t-1 border-color p-4 ml-4">
            <p className="font-semibold text-lg">Theme Colors</p>
            <div className="flex gap-3 ">
              {themeColors.map((item, index) => (
                <TooltipComponent
                  key={index}
                  content={item.name}
                  position="TopCenter"
                >
                  <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                    <button
                      type="button"
                      className="h-10 w-10 rounded-full cursor-pointer"
                      style={{
                        backgroundColor: item.color,
                      }}
                      // set color to the value AND close settings
                      onClick={() => setColor(item.color)}
                    >
                      <BsCheck
                      // mark as check when color is pressed
                        className={`ml-2 text-2xl text-white ${
                          item.color === currentColor ? "block" : "hidden"
                        }`}
                      />
                    </button>
                  </div>
                </TooltipComponent>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSettings;
