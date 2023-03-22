const { request } = require('http');
const axios = require('axios');
const { URL } = require('url');

const url = new URL('http://localhost:5000/');

function useHttpModule() {
    request(url, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            console.log('Data from Http Module Request', JSON.parse(data));
        });
    }).on('error', (err) => {
        console.log(err);
    }).end();
}

async function useFetchApi() {
    const res = await fetch(url);
    const data = await res.json();
    console.log('Data from Fetch Api', data);
}

async function useAxios() {
    const res = await axios.get(url);
    console.log('Data from Axios', res.data);
}

async function fetchData() {
    useHttpModule();
    await useFetchApi();
    await useAxios();
} '';

fetchData();