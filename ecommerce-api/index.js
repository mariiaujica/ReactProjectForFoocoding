'use strict';

const Express = require('express');

// import our CRUD actions
const {
  createProduct,
  readAllProducts,
  readProduct,
  updateProduct,
  deleteProduct,
  deleteAllProducts
} = require('./actions');

const Product = require('./product');

const FILENAME  = 'products.json';
const PORT      = 80;
const PRODUCT_SLUG = 'products';

const product = new Product(FILENAME);

const app = new Express();

// Use built-in JSON middleware to automatically parse JSON
app.use(Express.json());

app.post(`/${PRODUCT_SLUG}`,       createProduct.bind(null, product));
app.get(`/${PRODUCT_SLUG}`,        readAllProducts.bind(null, product));
app.get(`/${PRODUCT_SLUG}/:id`,    readProduct.bind(null, product));
app.put(`/${PRODUCT_SLUG}/:id`,    updateProduct.bind(null, product));
app.delete(`/${PRODUCT_SLUG}/:id`, deleteProduct.bind(null, product));
app.delete(`/${PRODUCT_SLUG}`,     deleteAllProducts.bind(null, product));

app.listen(PORT, error => {
  if (error)
    return console.error(error);

  console.log(`Server started on http://tottifrutti.onrender.com:${PORT}`);
});
