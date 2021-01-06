import ItemList from "../components/ItemList"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { fetchItemList, FETCH_ITEM_LIST } from "../modules/item"


const ItemListContainer = () => {

    // useDispatch: 컴포넌트 내부에서 스토어의 내장 함수 dispatch를 사용할 수 있게 해주는 hook 이다.
    // useSelector: connect 함수를 대신하여 스토어 상태를 조회

    const dispatch = useDispatch()
    const { items, isLoading } = useSelector(({ item, loading }) => ({
        items: item.items,
        isLoading: loading[FETCH_ITEM_LIST]
    }))

    // 브라우저 상에 컴포넌트가 나타날 때 상품 목록을 조회하는 함수를 실행
    useEffect(() => {
        dispatch(fetchItemList())
    }, [dispatch])

    return <ItemList items={items} isLoading={isLoading} />
}

export default ItemListContainer