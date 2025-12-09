import { Outlet } from "react-router-dom";
import "./App.css";

function App() {

  return (
    <>
      <h1 className="text-3xl text-red-700">Book Store</h1>
      <Outlet/>
    </>
  );
}

export default App;
