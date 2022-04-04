const listaProductos = [
  {
    id: "01",
    name: "random1",
    description: "sarasa",
    img: "https://picsum.photos/200",
    precio: "300",
    stock: "02",
    category: "remeras",
  },
  {
    id: "02",
    name: "random2",
    description: "sarasa",
    img: "https://picsum.photos/201",
    precio: "300",
    stock: "10",
    category: "remeras",
  },
  {
    id: "03",
    name: "random3",
    description: "sarasa",
    img: "https://picsum.photos/202",
    precio: "300",
    stock: "05",
    category: "jeans",
  },
  {
    id: "04",
    name: "random4",
    description: "sarasa",
    img: "https://picsum.photos/203",
    precio: "300",
    stock: "03",
    category: "jeans",
  },
  {
    id: "05",
    name: "random5",
    description: "sarasa",
    img: "https://picsum.photos/204",
    precio: "300",
    stock: "07",
    category: "zapatillas",
  },
  {
    id: "06",
    name: "random6",
    description: "sarasa",
    img: "https://picsum.photos/205",
    precio: "300",
    stock: "05",
    category: "zapatillas",
  },
];

export const getProducts = new Promise((resolve, reject) => {
  let condition = true;

  if (condition) {
    setTimeout(() => {
      resolve(listaProductos);
    }, 2000);
  } else {
    reject("se pudrio todo");
  }
});
