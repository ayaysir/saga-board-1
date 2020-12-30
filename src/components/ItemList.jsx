import { Link } from "react-router-dom"

export default function ItemList() {
    return (
        <div align="center">
            <h2>상품 목록</h2>
            <Link to="/create">새로 만들기</Link>
            <table className="item-list">
                <thead>
                    <tr>
                        <th align="center" width="80">상품아이디</th>
                        <th align="center" width="320">상품명</th>
                        <th align="center" width="100">상품가격</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td align="center">100</td>
                        <td align="left">
                            <Link to={`/read/100`}>풍경사진</Link>
                        </td>
                        <td align="right">1000 원</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}