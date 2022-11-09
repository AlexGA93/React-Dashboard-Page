import React from "react";

// components
import { Header, CustomColorPicker } from "../components";

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 dark:bg-secondary-dark-bg bg-white rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="dark:text-white text-2xl font-semibold mt-2 mb-4">
              Inline Pallete
            </p>
            <CustomColorPicker id="inline-palette" mode="Palette" />
          </div>
          <div>
            <p className="dark:text-white text-2xl font-semibold mt-2 mb-4">
              Inline Picker
            </p>
            <CustomColorPicker id="inline-picker" mode="Picker" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
