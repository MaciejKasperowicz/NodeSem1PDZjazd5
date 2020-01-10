const axios = require("axios");

const getUser = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    return axios.get(url);
}

(async () => {
    try {
        const response = await getUser(2);
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
})();