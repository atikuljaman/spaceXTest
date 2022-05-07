import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import SpaceXHome from "./components/SpaceXHome/SpaceXHome/SpaceXHome";
import SuccessfulLaunch from "./components/SpaceXHome/SuccessfulLaunch/SuccessfulLaunch";
import Cards from "./components/SpaceXHome/Cards/Cards";
import UnsuccessfulLaunch from "./components/SpaceXHome/UnsuccessfulLaunch/UnsuccessfulLaunch";
import SuccessfulLand from "./components/SpaceXHome/SuccessfulLand/SuccessfulLand";
import UnsuccessfulLand from "./components/SpaceXHome/UnsuccessfulLand/UnsuccessfulLand";
import LaunchYear from "./components/SpaceXHome/LaunchYear/LaunchYear";
import "./App.css";

function App() {
  const [year, setYear] = useState("2006");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/spaceXHome/all-launches" />} />
        <Route path="/spaceXHome/*" element={<SpaceXHome setYear={setYear} />}>
          <Route path="all-launches" element={<Cards />} />
          <Route path="successful-launch" element={<SuccessfulLaunch />} />
          <Route path="unsuccessful-launch" element={<UnsuccessfulLaunch />} />
          <Route path="successful-land" element={<SuccessfulLand />} />
          <Route path="unsuccessful-land" element={<UnsuccessfulLand />} />
          <Route path="launch-year" element={<LaunchYear year={year} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
