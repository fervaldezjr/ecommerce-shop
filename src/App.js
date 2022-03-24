import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { navbarData } from "./components/Navbar/NavbarData";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const stock = 10;
  const initial = 1;

  const onAdd = (contador) => {
    console.log(contador);
  };

  return (
    <div className="App">
      <Navbar {...navbarData} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ItemListContainer title="Greeting con props 👋🏽" />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
    </div>
  );
}

export default App;
