import Axios from "axios";
////////////////////////////////////
export const url = "http://localhost:5000"; //when deployed think about
export const getProducts = () => {
  return Axios.get(url + "/api/data");
};
export const getMenus = () => {
  return Axios.get(url + "/api/menus");
};
export const getPizza = () => {
  return Axios.get(url + "/api/pizza");
};
export const getBurger = () => {
  return Axios.get(url + "/api/burger");
};
export const getSauce = () => {
  return Axios.get(url + "/api/sauce");
};
export const getDessert = () => {
  return Axios.get(url + "/api/dessert");
};
export const getDrink = () => {
  return Axios.get(url + "/api/drink");
};
////////////////////////////////////
export const postProduct = (item) => {
  return Axios.post(url + "/api/postproduct", item);
};
///////////////////////////////////

export const updatemenu = (item) => {
  return Axios.put(url + "/api/updatemenu", item);
};
export const updateProduct = (item) => {
  return Axios.put(url + "/api/updateproduct", item);
};
///////////////////////////////////

export const deleteProduct = (item) => {
  return Axios.delete(url + "/api/deleteproduct", { data: item });
};

// {headers: { "content-type": "multipart/form-data" },}
// export const getProducts = () => {
//   return fetch(`/api/data`, {
//     method: "GET",
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => console.log(err));
// };

// export const postProduct = (product) => {
//     return fetch("/api/posting", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     })
//       .then((response) => {
//         return response.json();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

// Axios.get("/api/data")
//   .then((res) => {
//     setProducts(res.data);
//   })
//   .catch((err) => console.log(err));
// fetch("/api/data", { method: "GET" })
//   .then((res) => res.json())
//   .then((data) => setProducts(data))
//   .catch((err) => console.log(err));
