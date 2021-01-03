import React from "react"
import { Link } from "react-router-dom"

export default function ItemRead({ itemId, item, isLoading }) {

    // 이미지 표시 URL 생성
    const pictureUrl = () => {
        return (
            `/items/display?itemId=${itemId}&timestamp=${new Date().getTime()}`
        )
    } 

    return (
        <div align="center">
            <h2>상품 상세보기</h2>
            {isLoading && "로딩중...."}
            {!isLoading && item && (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td>상품번호</td>
                                <td>
                                    <input type="text" value={item.itemId} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>상품명</td>
                                <td>
                                    <input type="text" value={item.itemName} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td>상품가격</td>
                                <td>
                                    <input type="text" value={item.price} readOnly />
                                    <span>&nbsp;원</span>
                                </td>
                            </tr>
                            <tr>
                                <td>미리보기</td>
                                <td>
                                    <img src={pictureUrl()} alt="상품 이미지" width="200" />
                                </td>
                            </tr>
                            <tr>
                                <td>상품설명</td>
                                <td>
                                    <textarea value={item.description} readOnly></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}

            <Link to={`/edit/${itemId}`}>편집</Link>&nbsp;
            <button>삭제</button>&nbsp;
            <Link to="/">목록</Link>
        </div >

    )
}