import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/verification" element={<></>} />
        <Route path="/home" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
