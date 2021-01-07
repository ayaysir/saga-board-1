import { Link } from "react-router-dom"
import React, { useState, useCallback } from "react"

export default function ItemRegisterForm({ onRegister }) {

    const [itemName, setItemName] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [file, setFile] = useState(null)

    // 상품명이 사용자의 입력에 의해 변경되면 itemName 상태값을 변경한다.
    const handleChangeItemName = useCallback(e => {
        setItemName(e.target.value)
    }, [])

    // 가격이 사용자의 입력에 변경되면 price 설정 함수를 호출한다.
    const handleChangePrice = useCallback(e => {
        setPrice(e.target.value)
    }, [])

    // 상품 설명
    const handleChangeDescription = useCallback(e => {
        setDescription(e.target.value)
    }, [])

    // 업로드 파일
    const handleChangeFile = useCallback(e => {
        console.log(e.target.files[0])
        setFile(e.target.files[0])
    }, [])

    const handleSubmit = useCallback(e => {
        e.preventDefault()

        onRegister({itemName, price, description, file})
    }, [onRegister, itemName, price, description, file])

    return (
        <div align="center">
            <h2 class="title">상품 등록</h2>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th className="form-label">상품명</th>
                            <td>
                                <input 
                                    type="text"
                                    value={itemName}
                                    onChange={handleChangeItemName} 
                                />
                            </td>
                        </tr>
                        <tr>
                            <th className="form-label">상품가격</th>
                            <td>
                                <input 
                                    type="text"
                                    value={price}
                                    onChange={handleChangePrice} 
                                />
                                <span class="in-won">₩</span>
                            </td>
                        </tr>
                        <tr>
                            <th className="form-label">상품파일</th>
                            <td>
                                <input type="file" onChange={handleChangeFile} />
                            </td>
                        </tr>
                        <tr>
                            <th className="form-label">상품설명</th>
                            <td>
                                <textarea 
                                    rows="5"
                                    value={description}
                                    onChange={handleChangeDescription}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit" className="like-a-button success">등록</button>&nbsp;
                    <Link to="/" className="like-a-button">취소</Link>                     
                </div>
            </form>
        </div>
    )
}