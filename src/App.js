import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Product from "./components/Product";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState(null);
  const [allProducts, setAllProducts]= useState(null);

  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get("./data.json");
      setProducts(data)
      setAllProducts(data)
    }
    fetchData()
 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
      <Sidebar products={products} allProducts={allProducts} setProducts={setProducts}/>
      <Product products={products} />
      </main>
    </div>
  );
}

export default App;
