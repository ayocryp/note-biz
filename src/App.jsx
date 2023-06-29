import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ScrollToTop from "./hooks/scrolltop.jsx";

import Header from "./components/Header";
import Home from "./components/Home";
import GetInTouch from "./components/GetInTouch";
import Order from "./components/Order";
import ContactComponent from "./components/Contact/index.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import Policy from "./components/Policy";
import Terms from "./components/Terms/";
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
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms/>} />
          </Routes>
          <ContactComponent />
          <ToastContainer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
