import axios from 'axios';

const sendContact = async(userData) => {
    const url = 'https://blackisp.herokuapp.com';
    try {
        const { data } = await axios.post(`${url}/contact`, userData)
        console.log(data)
        // return data
    } catch (error) {
        throw error;
    }
}
export default sendContact;