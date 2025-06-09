import axios from 'axios'


const API_BASE_URL = 'https://b2b-backend-1.onrender.com/api/v1/'

const Api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true
})


export const loginUser = (credentials) => Api.post("/customer/login/", credentials)
export const getUserProfile = () => Api.get("/customer/profile")

export const getCategories = () => Api.get("/category/view")
export const getProductsByCategory = (id) => Api.get(`/product/category/${id}`)

export const getCartItems  = () => Api.get("/cart/")
export const addToCart = (item) => Api.post("/cart/", item)
export const removeFromCart  = (itemId) => Api.delete('/cart/', { data: { id: itemId } })


export const submitOrder = (orderData) => Api.post("/order/submit", orderData)
export const getUserOrders  = () => Api.get("/order/my")

export default Api