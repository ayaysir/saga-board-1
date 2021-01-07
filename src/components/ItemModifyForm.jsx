import { Link } from "react-router-dom"
import React, { useState, useEffect, useCallback } from "react"


// 이미지 표시 URL 생성
const pictureUrl = itemId => {
    return (
        `/items/display?itemId=${itemId}&timestamp=${new Date().getTime()}`
    )
}

export default function ItemModifyForm({ item, isLoading, onModify }) {


    const [itemName, setItemName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)

    useEffect(() => {
        if(item) {
            setItemName(item.itemName)
            setPrice(item.price)
            setDescription(item.description)
        }
    }, [item])

    const handleChangeItemName = e => {
        setItemName(e.target.value)
    }

    const handleChangeDescription = useCallback(e => {
        setDescription(e.target.value)
    }, [])

    const handleChangePrice = e => {
        setPrice(e.target.value)
    }

    const handleChangeFile = useCallback(e => {
        setFile(e.target.files[0])
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        console.log(itemName, price, description, file)
        onModify(itemName, price, description, file)
    }

    return (
        <div align="center">
            <h2>상품 수정</h2>
            {isLoading && "로딩중..."}
            {!isLoading && item && (
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td className="form-label">상품번호</td>
                                <td>
                                    <input type="text" value={item.itemId} disabled />
                                </td>
                            </tr>
                            <tr>
                                <td className="form-label">상품명</td>
                                <td>
                                    <input type="text" value={itemName} onChange={handleChangeItemName} />
                                </td>
                            </tr>
                            <tr>
                                <td className="form-label">상품가격</td>
                                <td>
                                    <input type="text" value={price} onChange={handleChangePrice} />
                                    <span>&nbsp;원</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="form-label">상품파일</td>
                                <td>
                                    <input type="file" onChange={handleChangeFile} />
                                </td>
                            </tr>
                            <tr>
                                <td className="form-label">미리보기</td>
                                <td>
                                    <img src={pictureUrl(item.itemId)} alt="" width="200" className="img-preview" />
                                </td>
                            </tr>
                            <tr>
                                <td className="form-label">상품설명</td>
                                <td>
                                    <textarea rows="5" value={description} onChange={handleChangeDescription}></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div>
                        <button type="submit" className="like-a-button">수정</button>&nbsp;
                    <Link to={`/read/${item.itemId}`} className="like-a-button">취소</Link>
                    </div>
                </form>
            )}

        </div>

    )
}