function problem3(number) {
    let answer = 0;
    for (let i = 1; i <= number; i++) {
        answer += getCountOf369(i);
    }
    return answer;
}

function getCountOf369(number) {
    let temp = number ?? 0;
    let count = 0;
    while (temp > 0) {
        div = Math.floor(temp / 10);
        mod = temp % 10;
        if (mod == 3 || mod == 6 || mod == 9) {
            count += 1;
        }
        temp = div;
    }
    return count;
}

module.exports = problem3;
