import { Item } from "../Item/Item"

const ItemList = ( {productos} ) => {

    return (
        <div>    
            <h2>Productos</h2>   
            <hr/>
            <div>
                { productos.map( (el) => <Item key={el.id} {...el}/> )}
            </div> 
        </div>
    )
}

export default ItemList