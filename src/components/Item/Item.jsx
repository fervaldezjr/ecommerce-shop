import { ItemText, Card, CardImg, ItemPrecio, ViewDetail, ItemTextContainer } from "./Item.styles"

const Item = ({producto}) => {
    return (
      <Card >
      <CardImg src={producto.img} className="card-img-top" alt={producto.name}/>
      <ItemTextContainer>
        <div className="card-body">
            <ItemText>{producto.name}</ItemText>
            <ItemPrecio>{producto.precio} EUR</ItemPrecio>
        </div>
        <ViewDetail to={`/detail/${producto.id}`}>View product</ViewDetail>
      </ItemTextContainer>
  </Card>
    )
  }
  
  export default Item