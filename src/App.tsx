import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./views/Home";
import './css/app.css'
import Country from "./views/Country";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":countryId" element={<Country />} />
      </Routes>
  </BrowserRouter>
   
  );
}

export default App;
