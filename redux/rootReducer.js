import { combineReducers } from "redux";
import cardReducer from "./card/cardReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
    productsState: productsReducer,
    cardState: cardReducer
})

export default rootReducer;