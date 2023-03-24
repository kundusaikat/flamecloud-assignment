
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ProxyChecker from "./pages/ProxyChecker";
import { urls } from "./utils/urls";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home/>}></Route>
      <Route path={urls.proxyChecker} element={<ProxyChecker/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
