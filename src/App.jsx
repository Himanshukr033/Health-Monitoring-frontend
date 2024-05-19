import "./App.css";

import { Routes, Route } from "react-router-dom";
import * as React from "react";
import General from "./pages/General";
import Cardiology from "./pages/Cardiology";
import Neurology from "./pages/Neurology";
import Pulmonology from "./pages/Pulmonology";
import Radiology from "./pages/Radiology";
import Dermatology from "./pages/Dermatology";
import Analysis from "./pages/Analysis";
import Help from "./pages/Help";
import Setting from "./pages/Setting";
import Optometry from "./pages/Optometry";


function App() {
  return (
    <Routes>
      index
    <Route path="/" element={<Cardiology />}/>
    <Route path="/general" element={<General/>}/>
    <Route path="/optometry" element={<Optometry/>}/>
    <Route path="/neurology" element={<Neurology />}/>
    <Route path="/pulmonology" element={<Pulmonology />}/>
    <Route path="/radiology" element={<Radiology />}/>
    <Route path="/dermatology" element={<Dermatology />}/>
    <Route path="/analysis" element={<Analysis />}/>
    <Route path="/help" element={<Help />}/>
    <Route path="/setting" element={<Setting />}/>
  </Routes>
  );
}

export default App;
