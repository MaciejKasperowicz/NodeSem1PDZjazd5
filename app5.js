const add = async (a, b) => {
    const result = a + b;
    if (result % 2 === 0) {
        throw new Error("Liczba parzysta");
    } else {
        return result;
    }
};

const res = async () => {
    try {
        const wyn = await add(5, 5);
        console.log(wyn);
    } catch (error) {
        console.log(error.message);
    }
}

res();
// add(5, 5)
//     .then(res => console.log(res))
//     .catch(error => console.log(error.message))

// add(4, 5)
//     .then(res => console.log(res))
//     .catch(error => console.log(error.message))

