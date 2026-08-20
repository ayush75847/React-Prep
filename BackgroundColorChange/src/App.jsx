import { useState } from "react";

function App() {
  const [color, setColor] = useState("White");

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: color,
          minHeight: "100vh",
          paddingTop: "20px",
        }}
      >
        <div className="wrapper">
          <div className="container">
            <button
              className="comp bg-red-500"
              onClick={() => changeColor("red")}
            >
              Red
            </button>
            <button
              className="comp bg-blue-500"
              onClick={() => changeColor("blue")}
            >
              Blue
            </button>
            <button
              className="comp bg-green-500"
              onClick={() => changeColor("green")}
            >
              Green
            </button>
            <button
              className="comp bg-cyan-500"
              onClick={() => changeColor("cyan")}
            >
              Cyan
            </button>
            <button
              className="comp bg-purple-500"
              onClick={() => changeColor("purple")}
            >
              Purple
            </button>
            <button
              className="comp bg-pink-500"
              onClick={() => changeColor("pink")}
            >
              Pink
            </button>
            <button
              className="comp bg-orange-500"
              onClick={() => changeColor("orange")}
            >
              Orange
            </button>
            <button
              className="comp bg-olive-500"
              onClick={() => changeColor("olive")}
            >
              Olive
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
