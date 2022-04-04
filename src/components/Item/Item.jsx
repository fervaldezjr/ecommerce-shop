import { Link } from "react-router-dom"
import { Button } from "../Button.styles"
import { Card, CardBody, CardImg, CardText, CardTitle } from "./Item.styles"

export const Item = ( {id, name, description, img, precio} ) => {

    return (
        <Card>
            <CardImg src={img} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>
                    {description}
                </CardText>
                <CardText>
                    Precio: ${precio}
                </CardText>
                <Link to={`/detail/${id}`}><Button>Ver más</Button></Link>
            </CardBody>
        </Card>
    )
}