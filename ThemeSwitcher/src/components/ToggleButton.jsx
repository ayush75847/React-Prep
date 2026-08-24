import React from "react";
import useTheme from "../context/theme";

function ToggleButton() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  function handleBtn(e) {
    const darkStatus = e.currentTarget.checked;
    if (darkStatus) darkTheme();
    else lightTheme();
  }

  return (
    <input
      type="checkbox"
      checked={themeMode === "dark"}
      onChange={handleBtn}
      className="
        h-7 w-14
        appearance-none
        rounded-full
        bg-gray-400
        cursor-pointer
        relative
        transition-all duration-300

        before:content-['']
        before:absolute
        before:top-1
        before:left-1
        before:h-5
        before:w-5
        before:rounded-full
        before:bg-white
        before:transition-transform
        before:duration-300

        checked:bg-orange-500
        checked:before:translate-x-7
      "
    />
  );
}

export default ToggleButton;
