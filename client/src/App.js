import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products />
          <Filter />
        </div>
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
