import * as productService from "../services/productService.js";

export const createProduct = async (req, res) => {
  const product = await productService.createProduct(req.body, req.user.id);

  res.json(product);
};

export const getProducts = async (req, res) => {
  const products = await productService.getProducts();

  res.json(products);
};

export const deleteProduct = async (req, res) => {
  await productService.deleteProduct(req.params.id);

  res.json({ message: "Deleted" });
};
