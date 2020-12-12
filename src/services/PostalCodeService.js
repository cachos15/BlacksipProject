import axios from 'axios';


const getPostalCode = async(code) => {
    const url = 'https://blackisp.herokuapp.com';  

    try {
        const { data } = await axios.get(`${url}/postalCodes/${code}`)
        console.log(data)
        // return data
    } catch (error) {
        throw error;
    }
};

export default getPostalCode;
