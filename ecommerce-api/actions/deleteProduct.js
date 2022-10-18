'use strict';

function deleteProduct(product, request, response) {
  const id = request.params.id;

  product.delete_(id)
    .then(() => {
      response.status(204);
      response.end();
    })
    .catch(({ message }) => {
      response.status(500);
      response.json({ error: message });
    });
};

module.exports = deleteProduct;
