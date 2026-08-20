import React from "react";

function InputBox({
  label,
  amount = 1,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <>
      <div className="currency-input">
        <div className="currency-input__header">
          <span>{label}</span>
          <span>Currency</span>
        </div>

        <div className="currency-input__body">
          <div className="currency-input__amount">
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              value={amount}
              disabled={amountDisable}
              onChange={(e) =>
                onAmountChange && onAmountChange(e.target.value)
              }
            />
          </div>

          <div className="currency-input__currency">
            <label htmlFor="currency">Currency</label>
            <select
              id="currency"
              value={selectCurrency}
              onChange={(e) =>
                onCurrencyChange && onCurrencyChange(e.target.value)
              }
              disabled={currencyDisable}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputBox;
