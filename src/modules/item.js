import { handleActions } from "redux-actions"

// 상품 saga 함수 작성
export function* itemSaga() {

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
    {},
    initialState
)

export default item