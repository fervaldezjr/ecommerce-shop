import React, { useEffect, useState } from "react";
import { getProducts } from "../../mocks/FakeApi";

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    getProducts.then((res) =>
      setProductDetail(res.find((item) => item.id === "05"))
    );

    return () => {
      second;
    };
  }, [third]);

  return <div>ItemDetailContainer</div>;
};

export default ItemDetailContainer;
