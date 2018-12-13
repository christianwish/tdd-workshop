const sortWord = x => x.split('').sort().join('');

export const isAnagramArr = (wordArr) => {
    return wordArr
        .map(x => x.toUpperCase())
        .map(sortWord)
        .reduce(
            (acc, x) => (acc.includes(x) ? acc : [...acc, x]),
            [],
        )
        .length === 1;
};
