import express, { urlencoded } from "express";
import cors from "cors";
import getRoutes from "./routes/dataRouter.js";
import path from "path";
// import path, { __dirname } from "path/posix";
const __dirname = path.resolve();

const port = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", getRoutes);

app.listen(port, () => {
  console.log(`running on ${port}`);
});
