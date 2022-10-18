'use strict';

const deserializeProduct = require('./deserializeProduct');

function createProduct(product, request, response) {
  deserializeProduct(request, response)
    .then(({ image, title, price, description }) => product.create(image, title, price, description))
    .then(product => {
      response.status(201);
      response.json({ product });
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = createProduct;
