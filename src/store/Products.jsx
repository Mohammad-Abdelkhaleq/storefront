
import axios from 'axios';

let initialState = {
    products: [],
    activeCategory: 'all',
    cart: [],
    cartCount: 0,
    openModal: false,
}

export default function ProductsReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case 'ACTIVE':
            const activeCategory = payload;
            const products = initialState.products.filter(product => product.category === payload);
            return { products, activeCategory };

        case 'GET_PRODUCTS':
            return { ...state, products: payload };
        case 'ADD_TO_CART':
            const cart = [...state.cart, payload];
            const cartCount = state.cartCount + 1;
            const total = state.total + payload.price;
            return { ...state, cart, cartCount, total };//
        case 'REMOVE_FROM_CART':
            const cartItems = state.cart.filter(product => product.id !== payload.id);
            const itemsRemoved = state.cart.filter(product => product.id === payload.id);
            const count = state.cartCount - itemsRemoved.length;
            const newTotal = state.total - payload.price;
            return { ...state, cart: cartItems, cartCount: count, total: newTotal };
        case 'RESET':
            return initialState;

        case 'OPEN_MODAL':
            return { ...state, openModal: !state.openModal };
        default:
            return state;
    }
}

// export const choosedCatagory = (name) => {
//     return {
//         type: 'catagory',
//         payload: name,
//     }
// }

export const activeCategory = (name) => {
    return {
        type: 'ACTIVE',
        payload: name,
    }
}

export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    }
}

export const removeFromCart = (product) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product,
    }
}

export const reset = () => {
    return {
        type: 'RESET',
    }
}

export const getProducts = (category) => {

    if(category === 'all'){

    return async function (dispatch) {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch({
            type: 'GET_PRODUCTS',
            payload: response.data,
        })
    }}else{
        return async function (dispatch) {
            const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
            dispatch({
                type: 'GET_PRODUCTS',
                payload: response.data,
            })
        }
    }
}

export const getPrductsBasedOnCategory = (category) => {
    return async function (dispatch) {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
        dispatch({
            type: 'GET_PRODUCTS',
            payload: response.data,
        })
    }
}


export  const openModal = () => {
    return {
        type: 'OPEN_MODAL',
    }
}



