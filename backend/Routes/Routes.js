const routes = require("express").Router();
const ProductControllers = require("../Controllers/ProductController");
routes.get("/get-Product", ProductControllers.GetAllProduct);
routes.post("/add-product", ProductControllers.CreateProduct);
routes.put("/update-Product/:id", ProductControllers.UpdateProduct);
routes.delete("/delete-Product/:id", ProductControllers.DeleteProduct);


module.exports = routes;
