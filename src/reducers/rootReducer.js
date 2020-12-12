import { SET_PRODUCTS, SORT_PRODUCTS } from "../actions/types";
const initState = {};
const reducer = (state = initState, action) => {
    const { payload } = action;
    console.log(action.type)
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, PRODUCTS: payload }
        case SORT_PRODUCTS:
            return { ...state, PRODUCTS: payload }
        default:
            return state
    }
}

export default reducer