import express from "express";
import { indexRouter } from "./routes/indexRouter.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.listen(PORT);
