import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/orders" element={<Orders />} exact />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
