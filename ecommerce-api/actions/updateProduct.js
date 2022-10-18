'use strict';

const deserializeProduct = require('./deserializeProduct');

function updateProduct(product, request, response) {
  deserializeProduct(request, response)
    .then(({ image, title, price, description }) => {
      const id = request.params.id;
      return product.update(id, image, title, price, description);
    })
    .then(product => {
      response.status(200);
      response.json({ product });
    })
    .catch(({ message, code }) => {
      response.status(code === 'not-found' ? 404 : 500);
      response.json({ error: message });
    });
};

module.exports = updateProduct;
