import axios from 'axios';

const getProducts = async() => {
    const url = 'https://blackisp.herokuapp.com';
    try {
        const data = await axios.get(`${url}/products`)
        return data
    } catch (error) {
        throw error;
    }
}
export default getProducts;