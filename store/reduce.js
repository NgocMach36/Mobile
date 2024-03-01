import PRODUCTS from"../data/products";

const initialState = {
    products: PRODUCTS,
    favProducts: [],
    filterProducts: PRODUCTS 
}
const reducer =(state=initialState, action) => {
    if (action.type === 'THEM_VAO_YEU_THICH') {
        const index = state.favProducts.findIndex(products => products.id === action.productId)
        console.log(index)
        if (index >=0) {
            const copy = [...state.favProducts]
            copy.splice(index, 1)
            return {...state, favProducts:copy}
        }
        else {
            const product =state.products.find(product =>product.id === action.productId);
            return { ...state, favProducts: state.favProducts.concat(product) }
        }
    }
    if (action.type === 'SET_FILTER') {
        const appliedFilters = action.filters;
        const updatedFilteredProducts = state.products.filter(product => {
          if (appliedFilters.isBrand !== product.isBrand) {
            return false;
          }
          if (appliedFilters.isSale !== product.isSale) {
            return false;
          }
          return true;
        });
        return {...state, filterProducts: updatedFilteredProducts };
      }
      return state;
}

export default reducer;