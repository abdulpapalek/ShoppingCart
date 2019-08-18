const { productStore } = require('../store');

/**
 * gets all the available products in the store.
 *
 * @returns {array} products
 */
const getProducts = () => productStore.getProducts();

module.exports = {
  getProducts
};
