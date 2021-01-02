import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import productReducer from './productReducer'
import productByIdReducer from './productByIdReducer'
import searchReducer from './searchReducer'


export default combineReducers({
  category: categoryReducer,
  products: productReducer,
  product: productByIdReducer,
  searchList:searchReducer
})