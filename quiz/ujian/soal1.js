function targetTerdekat(arr) {
    let posisio = arr.indexOf('o');
    if (posisio == -1) {
        return 0;
    } 
    let jarakTerdekat = Infinity;
    for (i = 0; i < arr.length -1; i++ ){
        if (arr[i] === 'x') {
            let jarak = Math.abs(i - posisio);
            if (jarak < jarakTerdekat) {
                jarakTerdekat = jarak;
            }
        }
    }
    return jarakTerdekat === Infinity ? 0 : jarakTerdekat;
}


console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1