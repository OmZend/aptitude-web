import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Quantitative from "./pages/Quantitative";
import Logical from "./pages/Logical";
import Verbal from "./pages/Verbal";
import DataInterpretation from "./pages/DataInterpretation";
import GeneralKnowledge from "./pages/GeneralKnowledge";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ marginLeft: "260px", padding: "20px", flex: 1 }}>
          <Routes>
            <Route path="/quantitative" element={<Quantitative />} />
            <Route path="/logical" element={<Logical />} />
            <Route path="/verbal" element={<Verbal />} />
            <Route path="/data-interpretation" element={<DataInterpretation />} />
            <Route path="/general-knowledge" element={<GeneralKnowledge />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
