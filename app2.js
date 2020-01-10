const div = (a, b) => {
    if (b === 0) {
        throw (new Error('divide by 0'));
    } else {
        return a / b;
    }
}



try {
    const result = div(5, 1)
    console.log(result);
} catch (error) {
    console.log(error);
}

try {
    const result = div(5, 0)
    console.log(result);
} catch (error) {
    console.log(error.message);
}