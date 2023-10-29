import { put, takeLatest, all, call } from 'redux-saga/effects';
import { fetchItemsSuccess, fetchItemsFailure, fetchItemsSuccessDelete, fetchItemsFailureDelete, fetchItemsFailurePost, fetchItemsSuccessPost, updateItemSuccess, updateItemFailure, deleteDataSuccess, deleteDataFailure } from './action';
import * as types from "./types";
import { fetchApi, fetchApiDelete, fetchApiPost , updateItemApi, deleteApi} from './api';

function* fetchItemsSaga() {
    try {
        const response = yield call(fetchApi);
        yield put(fetchItemsSuccess(response.data));
    } catch (error) {
        yield put(fetchItemsFailure(error));
    }
}

function* fetchItemsSagaDelete(action) {

    try {
        const response = yield call(fetchApiDelete,action.payload); 
        yield put(fetchItemsSuccessDelete(response.data));
    } catch (error) {
        yield put(fetchItemsFailureDelete(error));
    }
}

function* fetchItemsSagaPost(action) {

    try {
        const response = yield call(fetchApiPost,action.payload); 
        yield put(fetchItemsSuccessPost(response.data));
    } catch (error) {
        yield put(fetchItemsFailurePost(error));
    }
}

function* updateItemSaga(action) {
    try {
      yield call(updateItemApi, action.payload.itemId, action.payload.updatedData);
      yield put(updateItemSuccess());
    } catch (error) {
      yield put(updateItemFailure(error));
    }
  }
  

  function* delterApi(action){
    try{
        const response =  yield call(deleteApi,action.payload)
        yield put(deleteDataSuccess(response.data))
        console.log("resp", response)
    }
    catch(error){
        yield put(deleteDataFailure(error))

    }
  }


function* watchFetchItems() {
    yield takeLatest(types.FETCH_ITEMS_REQUEST, fetchItemsSaga);
    yield takeLatest(types.FETCH_ITEMS_DELETE, fetchItemsSagaDelete);
    yield takeLatest(types.CREATE_ITEM_REQUEST, fetchItemsSagaPost);
    yield takeLatest(types.UPDATE_ITEM_REQUEST, updateItemSaga);
    yield takeLatest(types.DELETE_ITEM, delterApi);

}

export default function* rootSaga() {
    yield all([watchFetchItems()]);
}

