function pasanganTerbesar(num) {
    let strNum = num.toString();
    let maxpair = 0;

    for (let i = 0; i < strNum.length - 1; i++) {
        let pair = parseInt(strNum[i] + strNum[i + 1]);
        if (pair > maxpair ) {
            maxpair = pair;
        }
    }
    return maxpair;

}


console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99