import React from 'react';

// color picker
import {
  ColorPickerComponent
} from '@syncfusion/ej2-react-inputs';

const change = (colorValue) => {
  // Apply color value to the html element
  document.getElementById('preview').style.backgroundColor = colorValue.currentValue.hex;
};

const CustomColorPicker = ({ id, mode }) => {
  return (
    <ColorPickerComponent
      id={id}
      mode={mode}
      modeSwitcher={false}
      inline
      showButtons={false}
      // apply selected color to an external element
      change={change}
    />
  )
}

export default CustomColorPicker