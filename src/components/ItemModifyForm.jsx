import { Link } from "react-router-dom"

export default function ItemModifyForm() {
    return (
        <div align="center">
            <h2>상품 수정</h2>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>상품번호</td>
                            <td>
                                <input type="text" disabled />
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
                            <td>상품파일</td>
                            <td>
                                <input type="file" />
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
                                <textarea rows="5"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit">수정</button>&nbsp;
                    <Link to={`/read/2000`}>취소</Link>
                </div>
            </form>
        </div>

    )
}