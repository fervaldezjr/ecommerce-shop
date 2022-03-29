import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { navbarData } from "./components/Navbar/NavbarData";
import Sidebar from "./components/Sidebar/Sidebar";
import ItemListContainer from "./components/ItemsListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

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

  const saludo = "Greeting con props 👋🏽";
  return (
    <div className="App">
      <Navbar {...navbarData} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ItemListContainer title={saludo} />
      <ItemCount stock={stock} initial={initial} onAdd={onAdd} />
      <ItemList />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
