const express = require("express");
const db = require("./database/index.js");
const PORT = 8000;
const app = express();
const cors = require("cors");
const productsRouter = require("./routes/ProductRoutes.js");
const usersRouter = require("./routes/userRoutes.js");
const { authenticateUser } = require("./middelwares/auth.js");
const authRoute = require("./routes/authRoute.js");
const categoryRoutes = require("./routes/categoryRoute.js");
const paymentRoute = require("./routes/payment.js");

app.use(express.json());

app.use(cors());
app.use(express.static(__dirname + "/../client/dist"));

//auth route (public)
app.use("/auth", authRoute);

//all routes below this middelware are secure
// app.use(authenticateUser);

app.use("/categories", categoryRoutes);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use("/payment", paymentRoute);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
