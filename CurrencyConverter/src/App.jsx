import { useEffect, useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("0");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [swapping, setSwapping] = useState(false);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  function swap() {
    setSwapping(true);
    setFrom(to);
    setTo(from);
  }

  function convertAmt() {
    setConvertedAmount(Number(amount * currencyInfo[to]));
  }

  useEffect(() => {
    if (swapping && amount!=="" && currencyInfo[to])
      setConvertedAmount(Number(amount * currencyInfo[to]));
  }, [currencyInfo, to, amount, swapping]);
  return (
    <>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          currencyOptions={options}
          selectCurrency={from}
        />
        <button onClick={swap}>Swap</button>
        <InputBox
          label="To"
          amount={convertedAmount}
          onCurrencyChange={setTo}
          currencyOptions={options}
          selectCurrency={to}
          amountDisable
        />

        <button onClick={convertAmt}>Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}</button>
      </form>
    </>
  );
}

export default App;
