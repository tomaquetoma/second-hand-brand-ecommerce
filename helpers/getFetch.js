const pruebaArray = [
  { id: "1", nombre: "tomas", description: "algodon", stock: 5 },
  { id: "2", nombre: "milagros", description: "lana", stock: 8 },
];
export const task = new Promise((resolve, reject) => {
  resolve(pruebaArray);
});

task.then((result) => {
  setTimeout(() => {
    console.log(result);
  }, 3000);
});
