import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import ScrollToTop from "./hooks/scrolltop.jsx";

import Header from "./components/Header";
import Home from "./components/Home";
import GetInTouch from "./components/GetInTouch";
import Order from "./components/Order";
import ContactComponent from "./components/Contact/index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Policy from "./components/Policy";
import Terms from "./components/Terms/";
import GetYourNotes from "./components/get-your-note/index.jsx";
import Payment from "./components/payment2312/index.jsx";
import ProtectedRoute from "./components/PrivateRoute";
import { PayProvider } from "./Context/PayContext";

function App() {
  return (
    <PayProvider>
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<GetInTouch />}></Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/order" element={<Order />}></Route>
            </Route>
            <Route path="*" element={<Link to="/" />}></Route>
            <Route path="/policy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/get-your-note" element={<GetYourNotes />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <ContactComponent />
          <ToastContainer />
        </ScrollToTop>
      </Router>
    </PayProvider>
  );
}

export default App;
