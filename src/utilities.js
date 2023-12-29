const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomIndex = (data) => {
    return Math.floor(Math.random() * data.length);
};

export { getRandomNumber, getRandomIndex };