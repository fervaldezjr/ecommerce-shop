import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { navbarData } from "./components/Navbar/NavbarData";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar {...navbarData} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ItemListContainer title="Greeting con props 👋🏽" />
    </div>
  );
}

export default App;
