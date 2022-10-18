'use strict';

async function deserializeProduct(request) {
  const { product } = request.body;
  if (product == null)
    throw new Error('product not set');

  if (product.image != null)
    product.image = product.image.trim();

  if (product.title != null)
    product.title = product.title.trim();

  if (product.price != null)
    product.price = product.price.trim();

  if (product.description != null)
    product.description = product.description.trim();

  if (product.title == null || product.title.length === 0)
    throw new Error('title not set');

  return product;
};

module.exports = deserializeProduct;
