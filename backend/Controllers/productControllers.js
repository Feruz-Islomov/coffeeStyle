import fs from "fs";

export const getproduct = (req, res) => {
  var db = [];
  fs.readFile("./data/data.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.send(JSON.parse(data));
  });
  fs.readFile("./data/menus.json", "utf-8", (err, data) => {
    if (err) throw err;
    db.push(JSON.parse(data));
  });
};

export const postProduct = (req, res) => {
  try {
    // const menu = req.body.menu;
    // fs.readFile("./data.json", "utf-8", (err, data) => {
    //   everything.push(data);
    //   //[ {  menus:[],   products: { pizza: [], burger: [],.. }     }  ]
    //   if (menu === "pizza") {
    //     const products = everything.products;
    //     const pizzaa = everything.products.pizza;
    //     pizzaa.push({ ...req.body, img: req.file.path });
    //     const everythingnew = {
    //       menus: everything[0].menus,
    //       products: {
    //         pizza: pizzaa,
    //         burger: products.burger,
    //         sauce: products.sauce,
    //         dessert: products.dessert,
    //         drink: products.drink,
    //       },
    //     };
    //     fs.writeFile("./data.json", JSON.stringify(everythingnew), (err) => {
    //       if (err) throw err;
    //       console.log("success");
    //     });
    //   } else if (menu === "burger") {
    //   } else if (menu === "sauce") {
    //   } else if (menu === "dessert") {
    //   } else if (menu === "drink") {
    //   }
    // });
    // res.status(201).send("File Uploaded successfully!")
    console.log(req.body);
    console.log(req.file);
  } catch (error) {
    res.status(400).send(error.message);
  }
  //   console.log(req.body);
  //   fs.unlink("./asus.json", (err) => {
  //     if (err) throw err;
  //     res.send("asus is deleted!");
  //   });
  //   fs.writeFile("./ooo.json", JSON.stringify(req.body), (err) => {
  //     if (err) throw err;
  //     res.send("file is written successfully!");
  //   });
};

export const postMenu = (req, res) => {
  try {
    // res.status(201).send("File Uploaded successfully!")
    console.log(req.body);
    console.log(req.file);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateProduct = (req, res) => {
  try {
    // res.status(201).send("File Uploaded successfully!")
    console.log(req.body);
    console.log(req.file);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteProduct = (req, res) => {
  console.log(req.body);
};
