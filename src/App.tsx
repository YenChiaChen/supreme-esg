import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LightPage from "./Pages/LightPage";
function App() {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/light" element={<LightPage />} />
    </Routes>
  );
}

export default App;
