import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./context/theme";
import ToggleButton from "./components/ToggleButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  };

  const lightTheme = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="min-h-screen bg-gray-100 dark:bg-zinc-950 text-black dark:text-white transition-colors duration-300">
          <header className="flex items-center justify-between px-8 py-5 border-b border-gray-200 dark:border-orange-500/20">
            <h1 className="text-xl font-bold">
              <span className="text-orange-500">Theme</span> Switcher
            </h1>

            <ToggleButton />
          </header>

          <main className="min-h-[calc(100vh-81px)] flex items-center justify-center px-4">
            <Card />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
