import axios from "axios";


export const getAllProducts = async () => {
    const response = await axios.get('http://localhost:8000/products/allProducts');
    return response
};

export const userSignup = async (data: any) => {
    const response = await axios.post('http://localhost:8000/user/signup', data);
    return response
};