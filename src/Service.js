import axios from 'axios'

const API = 'http://localhost:3001'

///
let token = null
export const setToken = e => {
    token = e;
}
///

// Peticiones al backend Product
export const getProducts = async () => {
    return await axios.get(`${API}/dashboard/products`)  
}

export const createProduct = async (product) => {
    //console.log("en createProduct :", product)

    /// HACERLO GLOBAL 
    /* const userData = JSON.parse(localStorage.getItem('signIn'))
    const { token } = userData.data
 */    
    const data = {
        method: 'PUT',
        headers:{
            'Content-type': 'application/json',
            'x-access-token': token,
        },
        body: product
    }
    //console.log("data:", data)
    
    ///
    return await axios.post(`${API}/dashboard/create`, product, data) // product
}

export const updateProduct = async (id, product) => {

    const data = {
        headers:{
            'x-access-token': token
        }
    }

    return await axios.put(`${API}/dashboard/product/${id}`, product, data)
}

export const deleteProduct = async (id) => {

    const data = {
        headers:{
            'x-access-token': token
        }
    }

    return await axios.delete(`${API}/dashboard/delete/${id}`, data)
}

