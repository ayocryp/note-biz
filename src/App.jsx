import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ScrollToTop from "./hooks/scrolltop.jsx";

import Header from "./components/Header";
import Home from "./components/Home";
import GetInTouch from "./components/GetInTouch";
import Order from "./components/Order";
import ContactComponent from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<GetInTouch />}></Route>
            <Route path="/order" element={<Order />}></Route>
            <Route path="*" element={<Link to="/" />}></Route>
          </Routes>
          <ContactComponent />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
