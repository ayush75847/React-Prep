import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchCurrency() {
      const res = await fetch(
        `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
      );
      const jsonRes = await res.json();

      // console.log(jsonRes);
      setData(jsonRes[currency]);
    }

    fetchCurrency();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
