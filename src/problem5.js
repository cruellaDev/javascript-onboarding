function problem5(money) {
    let standards = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let standard, div, mod;
    for (const i in standards) {
        standard = standards[i];
        div = Math.floor(money / standard);
        mod = money % standard;
        answer[i] = div;
        money = mod;
    }
    return answer;
}

module.exports = problem5;
