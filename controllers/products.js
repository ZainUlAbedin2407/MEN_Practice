import Product from "../models/product.js";

// req.query is used to get the query string from the url. It helps in filtering, sorting, and searching the data.
const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" }; // $regex is used to search for a string in the database, If we write http://localhost:5000/api/products?company=Samsung&name=Samsung Galaxy it get all product which belong to name Samsung Galaxy either if i pass queryObject.name = name it just find that data what we give in URL and if the data couldn't find it give me an empty array. $options: "i" is used to make the search case-insensitive
  }

  let apiData = Product.find(queryObject);

  if (sort) {
    let sortFix = sort.replaceAll(",", " "); // it is used to replace the comma with space. If we write http://localhost:5000/api/products?sort=price,name it will be replace as http://localhost:5000/api/products?sort=price name and sort the data by price in ascending order and name in descending order
    console.log(sortFix);
    apiData = apiData.sort(sortFix); // Sort description is available in getAllProductsTesting function
  }

  if (select) {
    let selectFix = select.replaceAll(",", " "); 
    console.log(selectFix);
    apiData = apiData.select(selectFix); // Select description is available in getAllProductsTesting function
  }

  // Pagination

  let page = Number(req.query.page) || 1; // it is used to show the data on the page. If we write http://localhost:5000/api/products?page=2 it will show the data on the second page //MongoDB save data in string form so we converted it into number 
  let limit = Number(req.query.limit) || 10; // it is used to limit the data. If we write http://localhost:5000/api/products?limit=2 it will show only 2 data  //MongoDB save data in string form so we converted it into number

  let skip = (page - 1) * limit; // it is used to skip the data. If we write http://localhost:5000/api/products?limit=2&page=2 it will skip the first 2 data and show the next 2 data

  apiData = apiData.skip(skip).limit(limit) // it is used to skip the data and limit the data

  // console.log(queryObject);

  const Products = await apiData;
  res.status(200).json({ Products, nbHits: Products.length });
};

// const getAllProductsTesting = async (req, res) => {
//   const myData = await Product.find({"company": "Apple"});  // find product by company. it is static and if we search for any other company it will not work
//   res.status(200).json({myData});
// };

// const getAllProductsTesting = async (req, res) => {
//   const myData = await Product.find(req.query); // find product by company. it is dynamic and if we search for any other company it will work  // http://localhost:5000/api/products/testing?company=Apple
//   res.status(200).json({ myData });
// };

/* const getAllProductsTesting = async (req, res) => {

  // sorting single field

  // const myData = await Product.find(req.query).sort("-price"); // it is sorting the data in descending order of price. If we want to sort the data in ascending order we can write Product.find(req.query).sort("price"), If we want to sort the data by name we can write Product.find(req.query).sort("name") => Asscending
  //  or Product.find(req.query).sort("-name") => Descending

  // sorting multiple fields

  const myData = await Product.find(req.query).sort("-price name"); // it is sorting the data by name in ascending order and price in descending order. If we want to sort data with multiple fields we can write Product.find(req.query).sort("name -price")
  res.status(200).json({ myData });
};*/

const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query).select("name price"); // it is used to select the fields which we want to show in the response. If we want to show only name and price we can write Product.find(req.query).select("name price")
  res.status(200).json({ myData });
};

export { getAllProducts, getAllProductsTesting };
