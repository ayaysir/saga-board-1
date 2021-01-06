import { createAction, handleActions } from "redux-actions"
import { takeLatest, call, put } from "redux-saga/effects"
import { fetchItemApi, fetchItemListApi } from "../lib/api"

import { startLoading, endLoading } from "./loading"

// 액션 타입 (상세)
const FETCH_SUCCESS = "item/FETCH_SUCCESS"
const FETCH_FAILURE = "item/FETCH_FAILURE"

// 상세 조회 액션 타입
export const FETCH_ITEM = "item/FETCH_ITEM"

// 액션 타입 (목록)
const FETCH_LIST_SUCCESS = "item/FETCH_LIST_SUCCESS"
const FETCH_LIST_FAILURE = "item/FETCH_LIST_FAILURE"

// 목록 조회 액션 타입
export const FETCH_ITEM_LIST = "item/FETCH_ITEM_LIST"

// 액션 생성 함수 (상세)
export const fetchSuccess = createAction(FETCH_SUCCESS, data => data)
export const fetchFailure = createAction(FETCH_FAILURE, e => e)

// 상세 조회 액션 생성 함수
export const fetchItem = createAction(FETCH_ITEM, itemId => itemId)

// 액션 생성 함수 (목록)
export const fetchListSuccess = createAction(FETCH_LIST_SUCCESS, data => data)
export const fetchListFailure = createAction(FETCH_LIST_FAILURE, e => e)

// 목록 조회 액션 생성 함수
export const fetchItemList = createAction(FETCH_ITEM_LIST)

// 상품 상세정보를 조회하는 태스크
function* fetchItemSaga(action) {
    yield put(startLoading(FETCH_ITEM))
    try {
        const response = yield call(fetchItemApi, action.payload)
        yield put(fetchSuccess(response.data))
    } catch(e) {
        yield put(fetchFailure(e))
    }
    yield put(endLoading(FETCH_ITEM))
}

/*
createAction
Create an enhanced action-creator with unlimited number of arguments.

Resulting action-creator will preserve semantic names of their arguments (id, title, amount, etc...).
Returned action object have predefined properties ({ type, payload, meta })

'redux-saga/effects' 에는 다양한 유틸함수들이 들어있습니다. 
put 이란 함수가 매우 중요한데요, 이 함수를 통하여 새로운 액션을 디스패치 할 수 있습니다.
그 다음엔, takeEvery, takeLatest 라는 유틸함수들을 사용해보겠습니다. 이 함수들은 액션을 모니터링하는 함수인데요, 
takeEvery는 특정 액션 타입에 대하여 디스패치되는 모든 액션들을 처리하는 것 이고, 
takeLatest는 특정 액션 타입에 대하여 디스패치된 가장 마지막 액션만을 처리하는 함수입니다. 
예를 들어서 특정 액션을 처리하고 있는 동안 동일한 타입의 새로운 액션이 디스패치되면 기존에 하던 작업을 무시 처리하고 새로운 작업을 시작합니다.

call
call 은 블럭되는 fork 라고 보면 된다. 인자로 함수나 saga task 를 받을 수 있다.
두번째부터는 실행될 함수나 사가의 인자로 들어간다.
보통 Promise 등의 실행 (보통은 Ajax Call) 에 쓰이며 Promise 가 resolve 될 때까지 블럭된다.

*/

// 상품 목록을 조회하는 태스크
function* fetchItemListSaga() {
    yield put(startLoading(FETCH_ITEM_LIST))
    try {
        const response = yield call(fetchItemListApi)
        yield put(fetchListSuccess(response.data))
    } catch(e) {
        yield put(fetchListFailure(e))
    }
    yield put(endLoading(FETCH_ITEM_LIST))
}

// 상품 saga 함수 작성
export function* itemSaga() {
    // 상세조회 태스크
    yield takeLatest(FETCH_ITEM, fetchItemSaga)
    // 목록 조회 태스크 수행
    yield takeLatest(FETCH_ITEM_LIST, fetchItemListSaga)
}


// 모듈의 초기 상태
const initialState = {
    item: null, // 하나의 상품 정보
    items: [],  // 상품 목록
    error: null // 응답에러 정보
}

// 리듀서 함수 정의
// 리듀서는 상태변화를 일으키는 함수이다.
const item = handleActions(
    { // 상세 조회 상태 변경
        [FETCH_SUCCESS]: (state, action) => ({
            ...state,
            item: action.payload
        }),
        [FETCH_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload
        }),
        // 목록 조회 상태 변경
        [FETCH_LIST_SUCCESS]: (state, action) => ({
            ...state,
            items: action.payload
        }),
        [FETCH_LIST_FAILURE]: (state, action) => ({
            ...state,
            error: action.payload
        })
    },
    initialState
)

export default item