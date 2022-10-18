'use strict';

function readAllProducts(product, request, response) {
  product.read()
    .then(products => {
      response.json({ products });
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = readAllProducts;
