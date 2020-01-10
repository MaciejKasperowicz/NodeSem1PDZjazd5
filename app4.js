const add = async (a, b) => {
    const result = a + b;
    if (result % 2 === 0) {
        throw new Error("Liczba parzysta");
    } else {
        return result;
    }
};

add(5, 5)
    .then(res => console.log(res))
    .catch(error => console.log(error.message))

add(4, 5)
    .then(res => console.log(res))
    .catch(error => console.log(error.message))