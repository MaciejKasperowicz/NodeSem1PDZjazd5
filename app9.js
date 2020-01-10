const axios = require("axios");

const getUser = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    return axios.get(url);
}

const getWeather = async (lat, lng) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?appid=0ed761300a2725ca778c07831ae64d6e&lat=${lat}&lon=${lng}`
    return axios.get(url);
}

(async () => {
    try {
        const response = await getUser(2);
        const userName = response.data.name;
        // console.log(response.data.name);
        const lat = response.data.address.geo.lat;
        const lng = response.data.address.geo.lng;

        const weather = await getWeather(lat, lng);
        console.log(`Oto main temp dla usera ${userName}: ${weather.data.main.temp}K.`);
    } catch (error) {
        console.log(error.message);
    }
})();