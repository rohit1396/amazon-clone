export const initialstate = {
  cart: [],
  user: null,
};
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      break;
    case "DELETE_ITEM":
      let newCart = [...state.cart];

      const index = state.cart.findIndex((item) => item.id === action.id);

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `cant remove product (id: ${action.id} as its not it the Shopping basket)`
        );
      }
      return {
        ...state,
        cart: newCart,
      };
      break;
    default:
      return state;
  }
};

export default reducer;
