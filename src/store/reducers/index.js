import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import productReducer from './productReducer'
import productByIdReducer from './productByIdReducer'
import searchReducer from './searchReducer'
import insertCustomerReducer from './insertCustomerReducer'
import customerLoginReducer from './customerLoginReducer.js'

export default combineReducers({
  category: categoryReducer,
  products: productReducer,
  product: productByIdReducer,
  searchList:searchReducer,
  customer:insertCustomerReducer,
  customerloginInfo:customerLoginReducer
})