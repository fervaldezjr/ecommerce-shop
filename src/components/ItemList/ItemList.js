import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";

const stockData = [
  {
    precio: 200,
    nombre: "camiseta",
    imagen:
      "https://w7.pngwing.com/pngs/811/789/png-transparent-flight-jacket-gucci-clothing-windbreaker-jacket-zipper-blue-retail.png",
  },
  {
    precio: 2200,
    nombre: "jean",
    imagen:
      "https://w7.pngwing.com/pngs/811/789/png-transparent-flight-jacket-gucci-clothing-windbreaker-jacket-zipper-blue-retail.png",
  },
  {
    precio: 2300,
    nombre: "campera",
    imagen:
      "https://w7.pngwing.com/pngs/811/789/png-transparent-flight-jacket-gucci-clothing-windbreaker-jacket-zipper-blue-retail.png",
  },
];

const ItemList = () => {
  function promesa2() {
    const promesa2 = new Promise((resolve, reject) => {
      if (stockData.length > 0) {
        resolve("Funciona");
      } else {
        reject("Error");
      }
    });

    promesa2
      .then((resuelta) => {
        console.log(resuelta);
      })
      .catch((err) => {
        console.log("Error catch");
      });
  }

  promesa2();

  return (
    <>
      {stockData.map((item) => {
        return (
          <Item
            precio={item.precio}
            nombre={item.nombre}
            imagen={item.imagen}
          />
        );
      })}
    </>
  );
};

export default ItemList;
