import { React } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Dasboard from "./Components/Dasboard/Dasboard";

import Login from "./Components/Login/Login";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import Navbars from "./Components/Navbar/Navbars";
import Reducer from "./Components/Reducer/Reducer";
import ContexApi from "./Components/ContexApi/ContexApi";

function App() {
  return (
    <div className="App">
      <ContexApi>
        <BrowserRouter>
          <Navbars></Navbars>
          <Routes>
            <Route path="home" element={<Home></Home>} />
            <Route path="about" element={<About></About>} />
            <Route path="login" element={<Login></Login>} />
            <Route path="/" element={<About></About>}></Route>
            <Route path="/*" element={<PrivateRoute></PrivateRoute>}>
              <Route path="dasboard" element={<Dasboard></Dasboard>} />
              <Route path="reducer" element={<Reducer></Reducer>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ContexApi>
    </div>
  );
}

export default App;
