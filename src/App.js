import './App.css';
import Navbar from "./components/Navbar" 
import Sidebar from "./components/Sidebar"
import Product from "./components/Product"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Sidebar/>
      <Product/>
    </div>
  );
}

export default App;
