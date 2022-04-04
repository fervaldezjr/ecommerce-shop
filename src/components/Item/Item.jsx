import { ItemText, Card, CardImg, ItemPrecio } from "./Item.styles"

const Item = ({producto}) => {
    return (
      <Card >
      <CardImg src={producto.img} className="card-img-top" alt={producto.name}/>
      <div className="card-body">
          <ItemText>{producto.name}</ItemText>
          <ItemPrecio>{producto.precio} EUR</ItemPrecio>
      </div>
  </Card>
    )
  }
  
  export default Item