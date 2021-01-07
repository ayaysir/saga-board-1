import ItemRegisterForm from "../components/ItemRegisterForm"
import axios from "axios"

/*
withRouter 함수는 High-order component이다. 
라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체에 접근할 수 있게 한다.
컴포넌트 속성값으로 match, location, history 객체를 전달받는다.
*/
import { withRouter } from "react-router-dom"

const ItemRegisterContainer = ({ history }) => {

    const onRegister = ({itemName, price, description, file}) => {
        const itemObject = {
            itemName,
            price,
            description
        }
    
        // FormData 객체 생성
        const formData = new FormData()
        formData.append("file", file)
        formData.append("item", JSON.stringify(itemObject))
    
        // 파일 업로드
        axios.post("/items", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            alert("등록되었습니다.")
            history.push("/read/" + res.data.itemId)
        }).catch(err => {
            alert(err)
        })
    
    }

    return <ItemRegisterForm onRegister={onRegister} />
}

export default withRouter(ItemRegisterContainer)