import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"], // the second parameter is the error message which will be displayed if the price is not provided
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      // enum is used to specify the values that are allowed for the company field
      values: ["Apple", "Samsung", "Google", "OnePlus"],
      message: `{value} is not supported`,
    },
  },
});

export default mongoose.model("Product", productSchema); // The first parameter is the name of the model and the second parameter is the schema that we created