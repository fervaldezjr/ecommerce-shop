import { Item } from "../Item/Item"

const ItemList = ( {productos} ) => {

    return (
        <div>    
            <h2>Productos</h2>   
            <hr/>
            <div>
                { productos.map( (producto) => <Item producto={producto} key={producto.id}/> )}
            </div> 
        </div>
    )
}

export default ItemList