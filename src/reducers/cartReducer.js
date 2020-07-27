import {ADD_ITEM, REMOVE_ITEM} from "../actions/types";

const initialState = {
    cartItems: []
}


const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM:
            return {
                ...state, 
                cartItems: state.cartItems.concat({
                    key: Math.random(),
                    value: action.data
                })
            };
        case REMOVE_ITEM:
            return {...state, 
                cartItems: state.cartItems.fitler((item) => 
                    item.key !== action.key
            )};
        default:
            return state;            
    }
}

export default cartReducer;