'use strict';

function deleteAllProducts(product, request, response) {

  product.clear()
    .then(() => {
      response.status(204);
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = deleteAllProducts;
