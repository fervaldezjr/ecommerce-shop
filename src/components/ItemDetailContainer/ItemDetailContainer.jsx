import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../mocks/FakeApi";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const {itemId} = useParams()

  useEffect(() => {
    setLoading(true);
    getProducts
      .then((res) => setProductDetail(res.find((item) => item.id === itemId)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <ItemDetail productDetail={productDetail} />
      )}
    </div>
  );
};

export default ItemDetailContainer;