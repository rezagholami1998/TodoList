import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Verification from "./pages/Verification";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/home" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
