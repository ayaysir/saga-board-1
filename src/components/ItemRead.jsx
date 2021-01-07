import React from "react"
import { Link } from "react-router-dom"

export default function ItemRead({ itemId, item, isLoading, onRemove }) {

    // 이미지 표시 URL 생성
    const pictureUrl = () => {
        return (
            `/items/display?itemId=${itemId}&timestamp=${new Date().getTime()}`
        )
    } 

    return (
        <div align="center">
            <h2 className="title">상품 상세보기</h2>
            {isLoading && "로딩중...."}
            {!isLoading && item && (
                <>
                    <table>
                        <tbody>
                            <tr>
                                <td className="form-label">상품번호</td>
                                <td>
                                    <input type="text" value={item.itemId} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td className="form-label">상품명</td>
                                <td>
                                    <input type="text" value={item.itemName} readOnly />
                                </td>
                            </tr>
                            <tr>
                                <td className="form-label">상품가격</td>
                                <td>
                                    <input type="text" value={item.price} readOnly />
                                    <span class="in-won">₩</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="form-label">미리보기</td>
                                <td>
                                    <img src={pictureUrl()} alt="상품 이미지" width="200" className="img-preview" />
                                </td>
                            </tr>
                            <tr>
                                <td className="form-label">상품설명</td>
                                <td>
                                    <textarea value={item.description} readOnly></textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}

            <Link to={`/edit/${itemId}`} className="like-a-button">편집</Link>&nbsp;
            <button onClick={onRemove} className="like-a-button danger">삭제</button>&nbsp;
            <Link to="/" className="like-a-button">목록</Link>
        </div >

    )
}