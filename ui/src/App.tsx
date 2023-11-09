import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tradie from "./tradie/Tradie";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /tradie?tab=0 on component mount
    navigate("/tradie?tab=0", { replace: true });
  }, [navigate]);

  return (
    <div>
      <Routes>
        <Route path="/tradie" element={<Tradie />} />
      </Routes>
    </div>
  );
};

export default App;
