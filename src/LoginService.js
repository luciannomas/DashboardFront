import axios from 'axios'

const API = 'http://localhost:3001'

//TODO: Peticiones al backend Product

export const signIn = async (user) => {
   
    return await axios.post(`${API}/auth/SignIn`, user)
}

/* export const getProducts = async () => {
    return await axios.get(`${API}/dashboard/products`)  
}

export const createProduct = async (product) => {
    console.log("en createProduct ? :" + product)
    return await axios.post(`${API}/dashboard/create`, product)
}

export const updateProduct = async (id, product) => {
    return await axios.put(`${API}/dashboard/product/${id}`, product)
}

export const deleteProduct = async (id) => {
    return await axios.delete(`${API}/dashboard/delete/${id}`)
}

 */