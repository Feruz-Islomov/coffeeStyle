import fs from "fs";

export const getproduct = (req, res) => {
  fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
};
export const getMenu = (req, res) => {
  fs.readFile("./data/menus.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
};
export const getPizza = (req, res) => {
  fs.readFile("./data/pizza.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
};
export const getBurger = (req, res) => {
  fs.readFile("./data/burger.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
};
export const getSauce = (req, res) => {
  fs.readFile("./data/sauce.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
};
export const getDessert = (req, res) => {
  fs.readFile("./data/dessert.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
};
export const getDrink = (req, res) => {
  fs.readFile("./data/drink.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
};
////////////////////////////////////////////////
export const postProduct = (req, res) => {
  try {
    if (req.body.menu === "pizza") {
      addProduct(req, res, getPizzaData, savePizzaData);
    } else if (req.body.menu === "burger") {
      addProduct(req, res, getBurgerData, saveBurgerData);
    } else if (req.body.menu === "sauce") {
      addProduct(req, res, getSauceData, saveSauceData);
    } else if (req.body.menu === "dessert") {
      addProduct(req, res, getDessertData, saveDessertData);
    } else if (req.body.menu === "drink") {
      addProduct(req, res, getDrinkData, saveDrinkData);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const editMenu = (req, res) => {
  try {
    const body = req.body;
    const existMenus = getMenuData();
    const findExist = existMenus.find((menu) => menu.id === body.id);
    if (!findExist) {
      return res.status(409).send("Menu does not exist");
    }
    deleteImg(findExist.img);
    findExist.name = body.name;
    findExist.img = req.file.path;
    saveMenuData(existMenus);
    res.send("User data updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const editProduct = (req, res) => {
  try {
    const dbody = req.body;
    if (dbody.menu === "pizza") {
      const existItems = getPizzaData();
      const findExist = existItems.find((item) => item.id === dbody.id);
      if (!findExist) {
        res.status(401).send("File does not exist");
      }
      deleteImg(findExist.img);
      findExist.name = dbody.name;
      findExist.img = req.file.path;
      findExist.ingredient = dbody.ingredient;
      findExist.sprice = dbody.sprice;
      findExist.mprice = dbody.mprice;
      findExist.lprice = dbody.lprice;
      findExist.menu = dbody.menu;
      savePizzaData(existItems);
      res.status(201).send("File Updated successfully!");
    } else if (dbody.menu === "burger") {
      updateProduct(req, res, getBurgerData, saveBurgerData);
    } else if (dbody.menu === "sauce") {
      updateProduct(req, res, getSauceData, saveSauceData);
    } else if (dbody.menu === "dessert") {
      updateProduct(req, res, getDessertData, saveDessertData);
    } else if (dbody.menu === "drink") {
      updateProduct(req, res, getDrinkData, saveDrinkData);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
export const deleteProduct = (req, res) => {
  try {
    const body = req.body;
    if (body.menu === "pizza") {
      delProd(body, res, getPizzaData, savePizzaData);
    } else if (body.menu === "burger") {
      delProd(body, res, getBurgerData, saveBurgerData);
    } else if (body.menu === "sauce") {
      delProd(body, res, getSauceData, saveSauceData);
    } else if (body.menu === "dessert") {
      delProd(body, res, getDessertData, saveDessertData);
    } else if (body.menu === "drink") {
      delProd(body, res, getDrinkData, saveDrinkData);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
///////////////////////////////////////////////
const addProduct = (req, res, getcb, savecb) => {
  if (req.body.menu === "pizza") {
    const a = req.body;
    const b = req.file.path;
    if (
      a.id == null ||
      a.name == null ||
      b == null ||
      a.sprice == null ||
      a.mprice == null ||
      a.lprice == null ||
      a.ingredient == null ||
      a.menu == null ||
      a.category == null
    ) {
      return res.status(401).send("Warning data missing!");
    } else {
      const existData = getcb();
      const newData = {
        id: a.id,
        name: a.name,
        ingredient: a.ingredient,
        category: a.category,
        img: b,
        sprice: a.sprice,
        mprice: a.mprice,
        lprice: a.lprice,
        menu: a.menu,
      };
      existData.push(newData);
      savecb(existData);
      res.status(200).send("Uploaded successfully");
    }
  }
  //////////////////////////// otherwise
  const a = req.body;
  const b = req.file.path;
  if (
    a.id == null ||
    a.name == null ||
    b == null ||
    a.ingredient == null ||
    a.category == null ||
    a.price == null ||
    a.menu == null
  ) {
    return res.status(401).send("Warning data missing!");
  } else {
    const existData = getcb();
    const newData = {
      id: a.id,
      name: a.name,
      ingredient: a.ingredient,
      category: a.category,
      img: b,
      price: a.price,
      menu: a.menu,
    };
    existData.push(newData);
    savecb(existData);
    res.status(200).send("Uploaded successfully");
  }
};
const updateProduct = (req, res, getcb, savecb) => {
  const body = req.body;
  const existItems = getcb();
  const findExist = existItems.find((item) => item.id === body.id);
  if (!findExist) {
    res.status(401).send("File does not exist");
  }
  deleteImg(findExist.img);
  findExist.name = body.name;
  findExist.img = req.file.path;
  findExist.ingredient = body.ingredient;
  findExist.price = body.price;
  findExist.menu = body.menu;
  savecb(existItems);
  res.status(201).send("File Updated successfully!");
};
const delProd = (body, res, getcb, savecb) => {
  const existItems = getcb();
  const findExist = existItems.find((item) => item.id !== body.id);
  if (!findExist) {
    res.status(401).send("File does not exist");
  }
  deleteImg(body.img);
  const filtered = existItems.filter((item) => item.id !== body.id);
  savecb(filtered);
  res.status(201).send("File Deleted successfully!");
};
const deleteImg = (imgPath) => {
  return fs.unlink(imgPath, (err) => {
    if (err) throw err;
    console.log("file successfully deleted!");
  });
};
///////////////////
const savePizzaData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/pizza.json", stringifyData);
};
const getPizzaData = () => {
  const jsonData = fs.readFileSync("./data/pizza.json");
  return JSON.parse(jsonData);
};
const saveBurgerData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/burger.json", stringifyData);
};
const getBurgerData = () => {
  const jsonData = fs.readFileSync("./data/burger.json");
  return JSON.parse(jsonData);
};
const saveSauceData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/sauce.json", stringifyData);
};
const getSauceData = () => {
  const jsonData = fs.readFileSync("./data/sauce.json");
  return JSON.parse(jsonData);
};
const saveDessertData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/dessert.json", stringifyData);
};
const getDessertData = () => {
  const jsonData = fs.readFileSync("./data/dessert.json");
  return JSON.parse(jsonData);
};
const saveDrinkData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/drink.json", stringifyData);
};
const getDrinkData = () => {
  const jsonData = fs.readFileSync("./data/drink.json");
  return JSON.parse(jsonData);
};
const saveMenuData = (data) => {
  const stringifyData = JSON.stringify(data);
  fs.writeFileSync("./data/menus.json", stringifyData);
};
const getMenuData = () => {
  const jsonData = fs.readFileSync("./data/menus.json");
  return JSON.parse(jsonData);
};
//////////////////////////////
