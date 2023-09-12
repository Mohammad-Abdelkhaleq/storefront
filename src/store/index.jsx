import { combineReducers, createStore,applyMiddleware  } from 'redux';
import ProductsReducer from './Products';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    products: ProductsReducer,
});


const store = () => {
    return createStore(reducers , applyMiddleware(thunk));
}

export default store();

