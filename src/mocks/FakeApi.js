const productos = [
  {
    id: "01",
    name: "random1",
    description: "sarasa",
    img: "https://picsum.photos/200",
    stock: "02",
  },
  {
    id: "02",
    name: "random2",
    description: "sarasa",
    img: "https://picsum.photos/201",
    stock: "10",
  },
  {
    id: "03",
    name: "random3",
    description: "sarasa",
    img: "https://picsum.photos/202",
    stock: "05",
  },
  {
    id: "04",
    name: "random4",
    description: "sarasa",
    img: "https://picsum.photos/203",
    stock: "03",
  },
  {
    id: "05",
    name: "random5",
    description: "sarasa",
    img: "https://picsum.photos/204",
    stock: "07",
  },
  {
    id: "06",
    name: "random6",
    description: "sarasa",
    img: "https://picsum.photos/205",
    stock: "05",
  },
];

export const getProducts = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  } else {
    reject("Err. no funciona");
  }
});
