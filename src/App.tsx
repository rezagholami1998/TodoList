import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import Verification from "./pages/Verification";
import { BrowserRouter, Routes, Route } from "react-router-dom";
///////////////////////////////////////////////////////////////
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
