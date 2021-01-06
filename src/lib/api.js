import axios from "axios"

// 상품 상세 조회 API 호출 함수
export const fetchItemApi = (itemId) => axios.get(`/items/${itemId}`)

// 상품 목록 조회 API 호출 함수
export const fetchItemListApi = () => axios.get("/items")

// 상품 삭제 API
export const removeItemApi = (itemId) => axios.delete(`/items/${itemId}`)
