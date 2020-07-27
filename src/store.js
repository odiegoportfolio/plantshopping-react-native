import {createStore, combineReducers} from "redux";
import cartReducer from "./reducers/cartReducer";
import plantReducer from "./reducers/plantReducer";

const rootReducer = combineReducers({
    cartReducer: cartReducer,
    plantReducer: plantReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;