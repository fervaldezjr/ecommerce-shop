import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../mocks/FakeApi";
import { Loading, ItemContainer } from "./ItemListContainer.styles";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect( () => {
        setLoading(true)

        getProducts
            .then((res) => {
                if (categoryId) {
                    setProductos( res.filter( (prod) => prod.category === categoryId ) )
                } else {
                    setProductos( res )
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [categoryId])

    return (
        <ItemContainer>
            {
                loading 
                    ? <Loading>Loading...</Loading> 
                    : <ItemList productos={productos}/>
            } 
        </ItemContainer>
    )
}

export default ItemListContainer