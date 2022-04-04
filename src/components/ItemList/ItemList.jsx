import Item from '../Item/Item'
import { ContainerProducts } from './ItemList.styles'

const ItemList = ({productos}) => {
    return (
      <ContainerProducts>
          {productos.map((producto) => <Item producto={producto} key={producto.id}/>)}
      </ContainerProducts>
    )
  }
  
  export default ItemList