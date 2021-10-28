import axios from 'axios';

axios.defaults.baseURL = 'https://api.binance.com/api/v3';

export async function fetchPrices() {
    const response = await axios.get('/ticker/24hr');
    return response;
}

// export async function fetchExchangeInfo() {
//     const response = await axios.get('/exchangeInfo');
//     return response;
// }