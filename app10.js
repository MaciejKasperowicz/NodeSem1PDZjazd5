const axios = require("axios");

const getUser = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`
    return axios.get(url);
}

const getPosts = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    return axios.get(url);
}

const getComments = async (postid) => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${postid}`
    return axios.get(url);
}


(async () => {
    try {
        const user = await getUser(7);
        //console.log(user.data.id)
        const { id } = user.data;

        console.log(`Imię użytkownka: ${user.data.name}, jego email: ${user.data.email}.`);
        const posts = await getPosts(id);
        //console.log(posts);
        console.log(`Ilość postów użytkownika: ${user.data.name} to: ${posts.data.length}. `)
        const titles = posts.data.map(post => post.title);
        titles.forEach((title, index) => console.log(`Tytul id: ${index + 1}, ${title}`));

        const idComment = posts.data[0].id;
        const [idCheck] = posts.data;
        console.log(idCheck.id);
        console.log(idComment);
        const comments = await getComments(idComment);
        console.log(`Ilość komentarzy użytkownika: ${user.data.name} to: ${comments.data.length}. `);

    } catch (error) {
        console.log(error.message);
    }

})();