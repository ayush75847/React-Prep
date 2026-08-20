import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [spCharAllowed, setSpCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (spCharAllowed) str += "!@#$%^&*(){}";

    for (let i = 0; i < length; i++) {
      let char = str.charAt(Math.floor(Math.random() * str.length));
      pass += char;
    }

    setPassword(pass);
  }, [length, numAllowed, spCharAllowed]);

  const passwordRef = useRef(null);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <>
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="w-full max-w-lg bg-zinc-900 rounded-2xl shadow-2xl p-8 border border-zinc-800">
          <h1 className="text-3xl font-bold text-orange-500 text-center mb-8">
            Password Generator
          </h1>

          <div className="flex mb-6">
            <input
              type="text"
              value={password}
              readOnly
              className="flex-1 px-4 py-3 bg-zinc-800 text-gray-200 rounded-l-lg outline-none border border-zinc-700 focus:border-orange-500"
              ref={passwordRef}
            />

            <button
              className="bg-orange-500 hover:bg-orange-600 transition px-5 rounded-r-lg text-white font-semibold"
              onClick={copyPassword}
            >
              Copy
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-gray-300 mb-2">
                <span>Password Length</span>
                <span className="text-orange-500 font-semibold">{length}</span>
              </div>

              <input
                type="range"
                min={8}
                max={100}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full accent-orange-500 cursor-pointer"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="num"
                checked={numAllowed}
                className="w-4 h-4 accent-orange-500"
                onChange={() => setNumAllowed((prev) => !prev)}
              />
              <label htmlFor="num" className="text-gray-300">
                Allow Numbers
              </label>
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="char"
                checked={spCharAllowed}
                className="w-4 h-4 accent-orange-500"
                onChange={() => setSpCharAllowed((prev) => !prev)}
              />
              <label htmlFor="char" className="text-gray-300">
                Allow Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
