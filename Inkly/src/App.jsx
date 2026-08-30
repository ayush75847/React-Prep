import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/authSlice";
import authService from "./appwrite/auth";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function currentUserInfo() {
      try {
        const currUser = await authService.getCurrentUser();
        if (currUser) dispatch(login({ userData: currUser }));
        else dispatch(logout());
      } catch (error) {
        console.log("current user error", error);
      } finally {
        setLoading(false);
      }
    }
    currentUserInfo();
  }, []);

  if (loading) {
    return (
      <>
        <div>
          <h1>Loading!</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
