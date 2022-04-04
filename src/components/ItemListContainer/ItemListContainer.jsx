import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { pedirDatos } from "../../helpers/pedirDatos";

const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()

    useEffect( () => {
        setLoading(true)

        pedirDatos()
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
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}

export default ItemListContainer