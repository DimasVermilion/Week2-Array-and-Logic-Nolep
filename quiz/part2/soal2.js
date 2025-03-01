function angkaPalindrome(num) {
    function ispalindrome(angka) {
        let strAngka = angka.toString();
        let reversed = strAngka.split('').reverse().join('');
        return strAngka === reversed;
    }
    num++;
    while (!ispalindrome(num)) {
        num++;
    } 
    return num;
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001