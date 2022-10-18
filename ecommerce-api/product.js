'use strict';

const fs   = require('fs');
const uuid = require('uuid/v4');

const DEFAULT_ENCODING = 'utf8';

class Product {
  constructor(filename) {
    this._filename = filename;
  }

  async create(image, title, price, description) {
    const products = await this.read();

    const product = {
      id:   uuid(),
      image,
      title,
      price,
      description
    };

    products.push(product);

    await this._save(products);

    return product;
  }

  read() {
    return new Promise(resolve => {
      fs.readFile(this._filename, DEFAULT_ENCODING, (error, data) => {
        if (error)
          return resolve([]);

        return resolve(JSON.parse(data));
      });
    });
  }

  async clear() {
    await this._save([])
  }

  getProduct(products, id) {
    const product = products.find(t => t.id === id);
    if (product == null) {
      const error = new Error(`Product with ID ${id} does not exist`);
      error.code = 'not-found';
      throw error;
    }
    return product;
  }

  async update(id, image, title, price, description) {
    const products = await this.read();

    const product = this.getProduct(products, id);

    product.image = image;
    product.title = title;
    product.price = price;
    product.description = description;

    await this._save(products);

    return product;
  }

  async delete_(id) {
    const products         = await this.read();
    const filteredProducts = products.filter(t => t.id !== id);

    return this._save(filteredProducts);
  }

  // Methods starting with underscore should not be used outside of this class
  _save(products) {
    return new Promise((resolve, reject) => {
      fs.writeFile(
        this._filename,
        JSON.stringify(products, null, 2),
        error => error == null
          ? resolve()
          : reject(error)
      );
    });
  }
}

module.exports = Product;
