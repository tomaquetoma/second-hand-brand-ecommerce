const products = [
  {
    id: 1,
    name: "Mesa Plegable",
    category: "hogar-muebles-jardin",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 25,
    price: 200,
    image:
      "https://res.cloudinary.com/dbt8209co/image/upload/v1639775980/Second%20Hand%20Brand/mesa-plegable_hhlsth.webp",
  },
  {
    id: 2,
    name: "Purificador de Agua",
    category: "electrodomesticos",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 300,
    price: 100,
    image:
      "https://res.cloudinary.com/dbt8209co/image/upload/v1639775981/Second%20Hand%20Brand/purificador-agua_bn6j0r.webp",
  },
  {
    id: 3,
    name: "Juego de Jardin",
    category: "hogar-muebles-jardin",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 20,
    price: 650,
    image:
      "https://res.cloudinary.com/dbt8209co/image/upload/v1639775980/Second%20Hand%20Brand/juego-jardin_vosfzi.webp",
  },
  {
    id: 4,
    name: "Licuadora Portatil Recargable",
    category: "electrodomesticos",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 100,
    price: 75,
    image:
      "https://res.cloudinary.com/dbt8209co/image/upload/v1639775980/Second%20Hand%20Brand/licuadora-portatil-recargable_kvr3na.webp",
  },
  {
    id: 5,
    name: "Notebook Lenovo IdeaPad",
    category: "tecnologia",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 30,
    price: 350,
    image:
      "https://res.cloudinary.com/dbt8209co/image/upload/v1639775981/Second%20Hand%20Brand/notebook-lenovo_b8bdj9.webp",
  },
  {
    id: 6,
    name: "Thermomix",
    category: "electrodomesticos",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 50,
    price: 2000,
    image:
      "https://res.cloudinary.com/dbt8209co/image/upload/v1639775981/Second%20Hand%20Brand/thermomix_zzelad.jpg",
  },
  {
    id: 7,
    name: "MacBook Air",
    category: "tecnologia",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 15,
    price: 950,
    image:
      "https://res.cloudinary.com/dbt8209co/image/upload/v1639775980/Second%20Hand%20Brand/macbook-air_b9b7mg.webp",
  },
  {
    id: 8,
    name: "Smart TV TCL Full HD 40' ",
    category: "tecnologia",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 25,
    price: 400,
    image:
      "https://res.cloudinary.com/dbt8209co/image/upload/v1639775981/Second%20Hand%20Brand/tv-tcl-full-hd-40_vizhea.webp",
  },
  {
    id: 9,
    name: "Set Red Fútbol Tenis",
    category: "deportes",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 60,
    price: 50,
    image:
      "https://res.cloudinary.com/dbt8209co/image/upload/v1639775981/Second%20Hand%20Brand/red-futbol-tenis_bvx14s.webp",
  },
  {
    id: 10,
    name: "Camiesta Puma Peñarol Oficial",
    category: "deportes",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 250,
    price: 80,
    image:
      "https://res.cloudinary.com/dbt8209co/image/upload/v1639775980/Second%20Hand%20Brand/camiesta-pe%C3%B1arol-2021_xgdru3.webp",
  },
  {
    id: 11,
    name: "Arco Fútbol Plegable",
    category: "deportes",
    description:
      "Nulla consequat massa quis enim. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.",
    stock: 100,
    price: 45,
    image:
      "https://res.cloudinary.com/dbt8209co/image/upload/v1639775981/Second%20Hand%20Brand/arco-futbol-plegable_vm0kfn.webp",
  },
];
export const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 3000);
});
