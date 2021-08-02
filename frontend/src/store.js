import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools } from 'redux-devtools-extension'
import { productListReducers, productDetailsReducers,productDeleteReducer,productCreateReducer,productUpdateReducer } from "./reducers/productReducers.js"
import { cartReducer } from './reducers/cartReducers'
import { userLoginReducer , userRegisterReducer  ,userDetailsReducer, userUpdateReducer, userUpdateProfileReducer,userDeleteReducer, userListReducer} from './reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer ,orderPayReducer, orderListMyReducer,orderDeliverReducer,orderListReducer} from './reducers/orderReducers.js'

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userList: userListReducer,
    productDelete: productDeleteReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    orderListMy: orderListMyReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    orderDeliver: orderDeliverReducer,
    orderList: orderListReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')):[]

const userInfoFromStorage = localStorage.getItem('UserInfo') ? JSON.parse(localStorage.getItem('userInfo')): null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}

const initialState = {
  cart:{ cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage, },
  userLogin:{ userInfo: userInfoFromStorage},
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)
    
export default store
