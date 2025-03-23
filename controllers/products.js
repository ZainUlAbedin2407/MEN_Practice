const getAllProducts = async (req, res) => {
  res.status(200).json({ message: "I am Get All Products" });
};

const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ message: "I am Get All Products Testing" });
};

export { getAllProducts, getAllProductsTesting };
