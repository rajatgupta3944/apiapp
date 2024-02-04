require("dotenv").config();
const express = require("express")
const app = express();
const connectDB = require("./db/connect")
const productsRoutes = require("./routes/products");

const PORT = process.env.PORT || 5000;
// const products_routes = require("./routes/products")

app.get("/", (req, res) => {
    res.send("Hi, I am live");
});

app.use(express.json());

// app.use("/api/products", products_routes);
app.use("/api/products", productsRoutes);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connecteed`);
        })
    }
    catch(error){
        console.log(error);
    }
}

start()