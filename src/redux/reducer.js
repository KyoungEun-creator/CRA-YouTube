import { createStore } from "redux";

const initState = {
    "detailedNav": false
};

const reducer = ( state = initState, action ) => {
    switch(action.type) {
        case "OPEN_DETAILEDNAV":
            return {
                ...state,
                "detailedNav": !state.detailedNav
            }

        default:
            return state
    }
};

const store = createStore(reducer);

export default store