import "./App.css";
import Authentication from "./components/Authentication";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Room from "./components/Room";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster position="bottom-right"></Toaster>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
