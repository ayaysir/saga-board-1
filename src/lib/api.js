import axios from "axios"

// 상품 상세 조회 API 호출 함수
export const fetchItemApi = (itemId) => axios.get(`/items/${itemId}`)