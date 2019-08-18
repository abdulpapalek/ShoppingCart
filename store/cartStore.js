const R = require('ramda');

const { getProductPrice } = require('./productStore');

const cart = {
  products: [],
  overAllTotal: 0
};

/**
 * adds product in store.
 *
 * @param {string} name
 * @returns {undefined}
 */
const addCartProduct = (name) => {
  const price = getProductPrice(name);
  const productIndex = R.findIndex(R.propEq('name', name))(cart.products);
  /**
   * Check if the name of the product already exist in the cart.
   * if it does not exist then add the product.
   * */
  if (productIndex === -1) {
    cart.products.push({
      name,
      price,
      quantity: 1,
      total: price
    });
  } else {
    cart.products[productIndex].total = Number((
      cart.products[productIndex].total + price
    ).toFixed(2));
    cart.products[productIndex].quantity += 1;
  }

  cart.overAllTotal = Number((cart.overAllTotal + price).toFixed(2));
};

/**
 * deletes product in store.
 *
 * @param {string} name
 * @returns {undefined}
 */
const deleteCartProduct = (name) => {
  const productIndex = R.findIndex(R.propEq('name', name))(cart.products);

  /**
   * Check if the name of the product already exist in the cart.
   * if it does exist then delete the product and update total.
   * */
  if (productIndex !== -1) {
    const priceToReduce = cart.products[productIndex].price;
    cart.products.splice(productIndex, 1);
    cart.overAllTotal = Number((cart.overAllTotal - priceToReduce).toFixed(2));
  }
};

/**
 * returns products in the cart
 *
 * @returns {array} cart
 */
const viewCartProduct = () => cart;


module.exports = {
  addCartProduct,
  deleteCartProduct,
  viewCartProduct
};
