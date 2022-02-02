import Axios from "axios";
////////////////////////////////////
export const url = "https://coffeestyleback.herokuapp.com"; //when deployed think about
// export const getProducts = () => {
//   return Axios.get(url + "/api/data");
// };
// export const getMenus = () => {
//   return Axios.get(url + "/api/menus");
// };
// export const getPizza = () => {
//   return Axios.get(url + "/api/pizza");
// };
// export const getBurger = () => {
//   return Axios.get(url + "/api/burger");
// };
// export const getSauce = () => {
//   return Axios.get(url + "/api/sauce");
// };
// export const getDessert = () => {
//   return Axios.get(url + "/api/dessert");
// };
// export const getDrink = () => {
//   return Axios.get(url + "/api/drink");
// };
////////////////////////////////////
export const postProduct = (item) => {
  return Axios.post(url + "/api/postproduct", item);
};
export const postVacant = (item) => {
  return Axios.post(url + "/api/postvacant", item);
};
export const postLogin = (user) => {
  return Axios.post(url + "/api/login", user);
};
export const postRegister = (user) => {
  return Axios.post(url + "/api/register", user);
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
export const deleteVacant = (item) => {
  return Axios.delete(url + "/api/deletevacant", { data: item });
};
