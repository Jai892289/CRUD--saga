import * as types from "./types"

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ITEMS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false
            };
        case types.FETCH_ITEMS_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };

        case types.FETCH_ITEMS_DELETE:
            return {
                ...state,
                loading: false
            };
        case types.FETCH_ITEMS_DELETE_SUCCESS:
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload),
                loading: false
            };
        case types.FETCH_ITEMS_DELETE_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case types.CREATE_ITEM_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.CREATE_ITEM_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload],
                loading: false
            };
        case types.CREATE_ITEM_FAILURE:
            return {
                ...state,
                error: action.error,
                loading: false
            };
        case types.UPDATE_ITEM_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case types.UPDATE_ITEM_SUCCESS:
            return {
                ...state,
                loading: false,
            };

        case types.UPDATE_ITEM_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        case types.DELETE_ITEM:
            console.log("new id", state)

            return {
                ...state,
                loading: false
            }

        case types.DELETE_ITEM_SUCCESS:
            console.log("new id", state)

            return {
                ...state,
                items: [...state, action.payload],
                loading: false
            }
        case types.DELETE_ITEM_FAIL:
            return {
                ...state,
                loading: false,
            }


        default:
            return state;
    }
};


export default itemsReducer;