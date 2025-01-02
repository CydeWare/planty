import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import productRoutes from "./routes/product.js";
import cartRoutes from "./routes/cart.js";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true})); //We use limit since we will be sending images
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));

// const DB_URL = process.env.DB_URL;
const DB_URL = "mongodb://Aero:idonotknown@ac-hhpxhej-shard-00-00.etsgvvd.mongodb.net:27017,ac-hhpxhej-shard-00-01.etsgvvd.mongodb.net:27017,ac-hhpxhej-shard-00-02.etsgvvd.mongodb.net:27017/?ssl=true&replicaSet=atlas-62h6sx-shard-0&authSource=admin&retryWrites=true&w=majority";

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Planty API!</h1>")
})

app.use("/products", productRoutes);

app.use("/cart", cartRoutes);
app.use("/user", userRoutes);

app.use("*", (req, res) => {
    res.end(`<h1>Page not found 404</h1>`)
})


mongoose.connect(DB_URL, { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then((result) => {
        console.log("connected to DB");
        app.listen(PORT, () => {
            console.log("listening on port " + PORT);
        });
    })
.catch((error) => {   console.log(error);    })
