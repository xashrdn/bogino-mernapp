import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ForgetPw from "./components/ForgetPw";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Header from "./pages/Header";
import Context from "./components/Context";
import History from "./components/History";

const App = () => {
  return (
    <Context>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpw" element={<ForgetPw />} />
          <Route path="/history" element={<History />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Context>
  );
};

export default App;
