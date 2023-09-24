function problem2(cryptogram = '') {
    let cryptogramArray = cryptogram?.split('') || [];
    for (let i = 0; i < cryptogram.length; i++) {
        let deleteCount = 0;
        cryptogramArray = cryptogramArray.reduce((acc, curr) => {
            if (acc.at(-1) != curr) {
                acc.push(curr);
            } else {
                acc.pop();
                deleteCount += 1;
            }
            return acc;
        }, []);
        if (deleteCount == 0) break;
    }
    return cryptogramArray.join('');
}

module.exports = problem2;
