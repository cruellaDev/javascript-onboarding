function problem1(pobi = [], crong = []) {
    if (!isValidPage(pobi) || !isValidPage(crong)) return -1;
    const pageSize = 2;
    let maxOfPobi = 0, maxOfCrong = 0;
    for (let i = 0; i < pageSize; i++) {
        maxOfPobi = Math.max(getMaxOfMultiplyOrSumOfDigits(pobi[i]), maxOfPobi);
        maxOfCrong = Math.max(getMaxOfMultiplyOrSumOfDigits(crong[i], maxOfCrong));
    }
    return maxOfPobi > maxOfCrong ? 1 : maxOfPobi < maxOfCrong ? 2 : 0;
}

function isValidPage(numbers = []) {
    return Number.isInteger(numbers[1] / 2) && numbers[0] + 1 == numbers[1];
}

function getMaxOfMultiplyOrSumOfDigits(number) {
    let sum = 0;
    let multiply = 1;
    let temp = number ?? 0;
    while (temp > 0) {
        div = Math.floor(temp / 10);
        mod = temp - div * 10;
        sum += mod;
        multiply *= mod;
        temp = div;
    }
    return Math.max(sum, multiply);
}

module.exports = problem1;
