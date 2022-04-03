import Item from "../Item/Item"

const ItemList = ({listaProductos}) => {
  return (
    <div>
        <h2>Productos</h2>
        <div>
            {listaProductos.map((el) => <Item key={el.id} {...el} />)}
        </div>
    </div>
  )
}

export default ItemList