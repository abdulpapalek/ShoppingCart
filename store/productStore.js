const R = require('ramda');

const products = [
  {
    name: 'Sledgehammer',
    price: 125.76
  },
  {
    name: 'Axe',
    price: 190.51
  },
  {
    name: 'Bandsaw',
    price: 562.14
  },
  {
    name: 'Chisel',
    price: 13.9
  },
  {
    name: 'Hacksaw',
    price: 19.45
  }
];

/**
 * return all the products in the list with the link to add the product
 *
 * @returns {array} - products
 */
const getProducts = () => R.map(product => R.merge(product, {
  addLink: `POST http://localhost:9000/shopping/cart?name=${product.name}`,
  deleteLink: `DELETE http://localhost:9000/shopping/cart?name=${product.name}`
}), products);

/**
 * return the price of a product
 *
 * @param {string} - name
 * @returns {number} - price
 */
const getProductPrice = name => (R.find(R.propEq('name', name))(products)).price;

/**
 * return product names
 *
 * @param {string} - name
 * @returns {number} - price
 */
const getProductsName = () => R.map(product => R.path(['name'], product), products);

module.exports = {
  getProducts,
  getProductPrice,
  getProductsName
};
