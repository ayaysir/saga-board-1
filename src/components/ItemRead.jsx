import { Link } from "react-router-dom"

export default function ItemRead() {
    return (
        <div align="center">
            <h2>상품 상세보기</h2>
            <table>
                <tbody>
                    <tr>
                        <td>상품번호</td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>상품명</td>
                        <td>
                            <input type="text" />
                        </td>
                    </tr>
                    <tr>
                        <td>상품가격</td>
                        <td>
                            <input type="text" />
                            <span>&nbsp;원</span>
                        </td>
                    </tr>
                    <tr>
                        <td>미리보기</td>
                        <td>
                            <img src="" alt="" width="200" />
                        </td>
                    </tr>
                    <tr>
                        <td>상품설명</td>
                        <td>
                            <textarea></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Link to={`/edit/200`}>편집</Link>&nbsp;
            <button>삭제</button>&nbsp;
            <Link to="/">목록</Link>
        </div >

    )
}