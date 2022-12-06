import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Justyna",
      email: "just@egmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Sebastian",
      email: "seb@gmail.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      //id: 1,
      title: "Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze",
      slug: "cesarzowa",
      image: "/images/photo.jpg",
      author: "Martina Winkelhofer",
      ISBN: 50,
      price: 29.49,
      category: "historyczna",
      description: "hgfddsfghjgfdsadfghgfdsasadf",
      rating: 4,
    },
    {
      //id: 2,
      title: "Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze",
      slug: "cesarzowa",
      image: "/images/photo.jpg",
      author: "Martina Winkelhofer",
      ISBN: 50,
      price: 29.49,
      category: "historyczna",
      description: "hgfddsfghjgfdsadfghgfdsasadf",
      rating: 4,
    },
    {
      //id: 3,
      title: "Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze",
      slug: "cesarzowa",
      image: "/images/photo.jpg",
      author: "Martina Winkelhofer",
      ISBN: 50,
      price: 29.49,
      category: "historyczna",
      description: "hgfddsfghjgfdsadfghgfdsasadf",
      rating: 4,
    },
    {
      //id: 4,
      title: "Cesarzowa. Pierwsze lata Sisi na wiedeńskim dworze",
      slug: "cesarzowa",
      image: "/images/photo.jpg",
      author: "Martina Winkelhofer",
      ISBN: 50,
      price: 29.49,
      category: "historyczna",
      description: "hgfddsfghjgfdsadfghgfdsasadf",
      rating: 4,
    },
  ],
};
export default data;
