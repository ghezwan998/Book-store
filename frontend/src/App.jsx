import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar/>
      <h1 className="text-3xl text-red-700">Book Store</h1>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
