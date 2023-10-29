import * as types from "./types"

export const fetchItemsRequest = () => ({
    type: types.FETCH_ITEMS_REQUEST,
});

export const fetchItemsSuccess = (items) => ({
    type: types.FETCH_ITEMS_SUCCESS,
    payload: items,
});

export const fetchItemsFailure = (error) => ({
    type: types.FETCH_ITEMS_FAILURE,
    error,
});

export const fetchItemsRequestDelete = (id) => ({
    type: types.FETCH_ITEMS_DELETE,
    payload: id,
});

export const fetchItemsSuccessDelete = (id) => ({
    type: types.FETCH_ITEMS_DELETE_SUCCESS,
    payload: id,
});

export const fetchItemsFailureDelete = (error) => ({
    type: types.FETCH_ITEMS_DELETE_FAILURE,
    error,
});

export const fetchItemsRequestPost = (itemData) => ({
    type: types.CREATE_ITEM_REQUEST,
    payload: itemData,
});

export const fetchItemsSuccessPost = (itemData) => ({
    type: types.CREATE_ITEM_SUCCESS,
    payload: itemData,
});

export const fetchItemsFailurePost = (error) => ({
    type: types.CREATE_ITEM_FAILURE,
    error,
});

// actions.js
export const updateItemRequest = (itemId, updatedData) => ({
    type: types.UPDATE_ITEM_REQUEST,
    payload: { itemId, updatedData },
  });
  
  export const updateItemSuccess = () => ({
    type: types.UPDATE_ITEM_SUCCESS,
  });
  
  export const updateItemFailure = (error) => ({
    type: types.UPDATE_ITEM_FAILURE,
    error,
  });
  

export const deleteData = (data) =>{
    console.log("new id", data)

    return {
        type:types.DELETE_ITEM,
        payload:data,
    }
}

export const deleteDataSuccess = (data) =>{
    console.log("new id", data)

    return {
        type:types.DELETE_ITEM_SUCCESS,
        payload:data,
    }
}

export const deleteDataFailure = (error) =>{
    return {
        type:types.DELETE_ITEM_FAIL,
        payload:error,
    }
}