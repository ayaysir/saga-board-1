import { createAction, handleActions } from "redux-actions"
import { takeLatest, call, put } from "redux-saga/effects"
import { fetchItemApi } from "../lib/api"

import { startLoading, endLoading } from "./loading"

// 액션 타입
const FETCH_SUCCESS = "item/FETCH_SUCCESS"
const FETCH_FAILURE = "item/FETCH_FAILURE"

// 상세 조회 액션 타입
export const FETCH_ITEM = "item/FETCH_ITEM"

// 액션 생성 함수
export const fetchSuccess = createAction(FETCH_SUCCESS, data => data)
export const fetchFailure = createAction(FETCH_FAILURE, e => e)

// 상세 조회 액션 생성 함수
export const fetchItem = createAction(FETCH_ITEM, itemId => itemId)

// 상품 상세정보를 조회하는 태스크
function* fetchItemSaga(action) {
    yield put(startLoading(FETCH_ITEM))
    try {
        const response = yield call(fetchItemApi, action.payload)
        console.log("resp data", response.data)
        yield put(fetchSuccess(response.data))
    } catch(e) {
        yield put(fetchFailure(e))
    }
    yield put(endLoading(FETCH_ITEM))
}

// 상품 saga 함수 작성
export function* itemSaga() {
    // 상세조회 태스크
    yield takeLatest(FETCH_ITEM, fetchItemSaga)
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
        })
    },
    initialState
)

export default item