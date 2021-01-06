import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import ItemRead from "../components/ItemRead"
import { fetchItem, FETCH_ITEM } from "../modules/item"

// 컴포넌트 속성을 통해 hisotry 객체를 접근하기 위해 불러온다.
import { withRouter } from "react-router-dom"

import { removeItemApi } from "../lib/api"

const ItemReadContainer = ({ match, history }) => {

    // match 객체의 params 속성값 참조
    const { itemId } = match.params
    console.log(match.params, itemId)

    // useDispatch()는 컴포넌트 내부에서 스토어의 내장함수 dispatch를 사용할 수 있게 해주는 훅이다.
    const dispatch = useDispatch()

    // useSelector Hook을 사용하면 connect 함수를 대신하여 스토어 상태를 조회할 수 있다.
    const { item, isLoading } = useSelector(({ item, loading }) => ({
        item: item.item,
        isLoading: loading[FETCH_ITEM]
    }))

    // 인자로 전달받은 삭제할 상품의 상품아이디를 서버 API에 전달하고 삭제가 성공적으로 이루어지면 삭제 완료 메시지 표시
    // 삭제 완료 메시지 확인 후 상품 목록 페이지로 이동
    const onRemove = async () => {
        try {
            await removeItemApi(itemId)
            alert("삭제되었습니다.")
            history.push("/")
        } catch(e) {
            console.log(e)
        }
    }

    // 브라우저 상에서 컴포넌트가 나타날 때 상품 상세정보를 가져오는 액션을 실행한다.
    useEffect(() => {
        dispatch(fetchItem(itemId))
        console.log(dispatch, fetchItem, FETCH_ITEM)
    }, [dispatch, itemId])


    console.log(item, isLoading )

    return (
        <ItemRead
            itemId={itemId}
            item={item}
            isLoading={isLoading}
            onRemove={onRemove}
        />
    )
}

// withRouter 함수 사용 시 컴포넌트 속성값으로 match, location, history가 전달된다.
export default withRouter(ItemReadContainer)