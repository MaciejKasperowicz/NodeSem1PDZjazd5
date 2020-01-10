const axios = require("axios");

const getUser = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    return axios.get(url);
}

// (async () => {
//     try {
//         const response = await getUser(2);
//         console.log(response.data);
//     } catch (error) {
//         console.log(error.message);
//     }
// })();

const ids = [2, 3, 5, 7];
const userPromises = ids.map(id => getUser(id));
console.log(userPromises);

(async () => {
    try {
        const response = await Promise.all(userPromises);
        //console.log(response);
        response.forEach(res => console.log(`Imię: ${res.data.name}. 
        Username: ${res.data.username}.`));
    } catch (error) {
        console.log(error.message);
    }
})();