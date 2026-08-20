import { useState } from "react";
import Card from "./components/Card";

function App() {
  let [counter, setCounter] = useState(0);
  let count=0;

  function handle(){
    count++;
    console.log(count);
  }

  const addValue = () => {
    if (counter > 9) {
      alert("Cannot exceed counter value");
    } else {
      setCounter(counter + 1);
    }
  };

  const decValue = () => {
    if (counter < 1) {
      alert("Cannot decrease counter value");
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      {/* <h1 className="bg-red-500 text-white p-6 text-4xl rounded-2xl">
        Counter Value: {counter}
      </h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={decValue}>Decrease Value</button> */}
      <h1>{count}</h1>
      <button onClick={handle}>+</button>

      <div className="container">
        <Card name="ayush" />
        <Card name="hardik" />
      </div>
      
    </>
  );
}

export default App;
