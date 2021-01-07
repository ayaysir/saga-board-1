import ItemModifyForm from "../components/ItemModifyForm"
import { useDispatch, useSelector } from "react-redux"
import React, { useEffect } from "react"
import { withRouter } from "react-router-dom"

import { fetchItem, FETCH_ITEM } from "../modules/item"
import axios from "axios"

const ItemModifyContainer = ({ match, history }) => {

    const dispatch = useDispatch()
    const { item, isLoading } = useSelector(({ item, loading }) => ({
        item: item.item,
        isLoading: loading[FETCH_ITEM]
    }))

    const { itemId } = match.params

    const onModify = (itemName, price, description, file) => {
        const itemObject = {
            itemId: itemId,
            itemName: itemName,
            price: price,
            description: description
        }

        const formData = new FormData()

        formData.append("file", file)
        formData.append("item", JSON.stringify(itemObject))

        axios.put("/items", formData, {
            headers: {
                "Content-type": "multipart/form-data"
            }
        }).then(res => {
            alert("수정되었습니다.")
            history.push("/read/" + itemId)
        }).catch(err => {
            alert(err.response.data.msg)
        })
    }

    useEffect(() => {
        dispatch(fetchItem(itemId))
    }, [dispatch, itemId])

    return (
        <ItemModifyForm
            item={item}
            isLoading={isLoading}
            onModify={onModify}
        />
    )
}

export default withRouter(ItemModifyContainer) // component 속성을 통해 history 객체에 접근하기 위해