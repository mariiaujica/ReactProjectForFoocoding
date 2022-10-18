'use strict';

function readProduct(product, request, response) {
  product.read()
    .then(products => {
      const id = request.params.id;
      const _product = product.getProduct(products, id);
      response.json({ product: _product });
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = readProduct;
