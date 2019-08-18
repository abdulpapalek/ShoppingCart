const Joi = require('joi');
const { cartStore, productStore } = require('../store');

const productSchema = Joi.object().keys({
  /**
   * Should only allow values from the product list
   */
  name: Joi.string().valid(...(productStore.getProductsName())).required()
});

/**
 * adds product in cart store.
 *
 * @param {string} name
 * @returns {undefined}
 */
const addProduct = (name) => {
  const result = Joi.validate({ name }, productSchema);
  if (result.error) {
    throw new Error(result.error);
  }

  cartStore.addCartProduct(name);
};

/**
 * deletes product in cart store.
 *
 * @param {string} name
 * @returns {undefined}
 */
const deleteProduct = (name) => {
  const result = Joi.validate({ name }, productSchema);
  if (result.error) {
    throw new Error(result.error);
  }

  cartStore.deleteCartProduct(name);
};

/**
 * gets the products in cart store.
 *
 * @returns {object} cart
 */
const getProducts = () => cartStore.viewCartProduct();

module.exports = {
  addProduct,
  deleteProduct,
  getProducts
};
