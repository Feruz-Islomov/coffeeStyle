import express, { urlencoded } from "express";
import cors from "cors";
import fs from "fs";
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.get("/", (req, res) => {
  fs.readFile("./data.json", "utf8", (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/posting", (req, res) => {
  //   console.log(req.body);
  //   fs.unlink("./asus.json", (err) => {
  //     if (err) throw err;
  //     res.send("asus is deleted!");
  //   });
  fs.writeFile("./product.json", JSON.stringify(req.body), (err) => {
    if (err) throw err;
    res.send("file is written successfully!");
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`running on ${port}`);
});
