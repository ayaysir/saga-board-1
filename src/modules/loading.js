import { createAction, handleActions } from "redux-actions"

// action type (액션 상수 타입 정의)
const START_LOADING = "loading/START_LOADING"
const END_LOADING = "loading/END_LOADING"

// create action function
// 로딩 시작/끝 액션 함수를 만들고 외부에서 사용할 수 있도록 공개한다.
export const startLoading = createAction(START_LOADING, actionType => actionType)
export const endLoading = createAction(END_LOADING, actionType => actionType)

// init states - 모듈의 초기 상태 설정
const initialState = {}

// definite reducer function
// redux의 액션의 type에 따른 작업 - if문 또는 switch 문을 아래로 대체
// 해당 액션별 로딩 시작/끝 상태를 설정한다.
const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: true
        }),
        [END_LOADING]: (state, action) => ({
            ...state,
            [action.payload]: false
        })
    },
    initialState
)

export default loading