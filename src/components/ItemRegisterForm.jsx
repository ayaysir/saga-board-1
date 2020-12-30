import { Link } from "react-router-dom"

export default function ItemRegisterForm() {
    return (
        <div align="center">
            <h2>상품 등록</h2>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <th>상품명</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <th>상품가격</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <th>상품파일</th>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <th>상품설명</th>
                            <td><input type="text" /></td>
                        </tr>
                    </tbody>
                </table>

                <div>
                    <button type="submit">등록</button>&nbsp;
                    <Link to="/">취소</Link>                     
                </div>
            </form>
        </div>
    )
}