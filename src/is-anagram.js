export const isAnagram = (wordArr) => {
    if (
        !Array.isArray(wordArr)
        || wordArr.length < 2
        || wordArr.filter(x => x === '').length !== 0
    ) {
        return false;
    }

    return wordArr
        .map(x => x.toLowerCase())
        .map(x => x.split('').sort().join(''))
        .reduce(
            (acc, x) => acc.includes(x) ? acc : [...acc, x],
            [],
        ).length === 1
}