import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import ItemRead from "../components/ItemRead"
import { fetchItem, FETCH_ITEM } from "../modules/item"

const ItemReadContainer = ({ match }) => {

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
        />
    )
}

export default ItemReadContainer