import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
