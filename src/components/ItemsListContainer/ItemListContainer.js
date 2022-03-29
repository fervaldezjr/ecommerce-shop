import { getProducts } from "../../mocks/FakeApi";
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";

const ItemListContainer = ({ saludo }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  // console.Log (getProducts)
  useEffect(() => {
    setCargando(true);
    getProducts
      .then((res) => setListaProductos(res))
      .catch((error) => console.log(error))
      .finally(() => setCargando(false));
  }, []);

  return (
    <div>
      <h1>{saludo}</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <ItemList listaProductos={listaProductos} />
      )}
    </div>
  );
};

export default ItemListContainer;
