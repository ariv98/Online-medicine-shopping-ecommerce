import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUB_QUANTITY, CHECK_OUT, CLEAR_CART } from './actionTypes'

export const addToCart = (medicine) => {
    return {
        type: ADD_TO_CART,
        medicine
    }
}

export const removeItem = (medicine) => {
    return {
        type: REMOVE_ITEM,
        medicine
    }
}

//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}

export const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}


//check out and store the cart values
export const checkOut = (cart) => {
    return {
        type: CHECK_OUT,
        cart
    }
}
