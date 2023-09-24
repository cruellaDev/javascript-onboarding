function problem4(word = '') {
    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let zyx = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
    let answer = '';
    for (const i in word) {
        const upper = word[i]?.toUpperCase() || '';
        const isUpperCase = word[i] === upper;
        const index = abc.indexOf(upper);
        if (index == -1) {
            answer += word[i];
            continue;
        }
        const change = zyx.at(index) || '';
        answer += isUpperCase ? change : change.toLowerCase();
    }
    return answer;
}

module.exports = problem4;
