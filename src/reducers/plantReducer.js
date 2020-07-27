import {SET_PLANT} from "../actions/types";

const initialState = {
    plant: {}
}


const plantReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_PLANT:
            return {
                ...state, 
                plant: action.data
            };
        default:
            return state;            
    }
}

export default plantReducer;