import { Router } from "express";
import { ProductManager } from "../daos/ProductManager.js";

const router = Router();
const productManager = new ProductManager("./productos.json");

router.get("/", async (req, res) => {
  try {
    const products = await productManager.getProducts();
    console.log("Productos obtenidos:", products);

    res.render("home", { 
      title: "Productos",
      products: products,
      fileCss: "styles.css"
     });
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).send("Error interno del servidor");
  }
});
// Form
router.get("/realTimeProducts", (req, res) => {
  res.render("realTimeProducts", {
    title: "Productos",
    fileCss: "styles.css",
  });
});

//Chat
router.get("/", (req, res) => {
  res.render("chat", {
    title: "Chat",
    fileCss: "styles.css",
  });
})

export default router;
