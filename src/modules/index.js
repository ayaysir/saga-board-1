import { combineReducers } from "redux"
import { all } from "redux-saga/effects"
import item, {itemSaga} from "./item"
import loading from "./loading"

// 루트 리듀서와 다른 리듀서를 결합
// item 리듀서와 loading 리듀서를 추가
const rootReducer = combineReducers({
    item,
    loading
})

// 루트 사가
// all 함수는 여러 사가를 합친다.
// 사가가 뭔데?
export function* rootSaga() {
    yield all([itemSaga()])
}

export default rootReducer