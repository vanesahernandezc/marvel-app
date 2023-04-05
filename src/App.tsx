import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Header from "./components/header/Header";
import useFetch from "./hooks/useFetch";

function App() {
  const exampleApi = useFetch(
    "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=551b78f51128ed74892d49ca92520b0b&hash=daf822825bc43c618a803d08b85830db"
  );
  return (
    <>
      <BrowserRouter>
        <Header />
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
