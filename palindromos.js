function palindrome(str) {
    str = str.replace("_", "")
        .replace(/[\\)\(/.,\\_-\s]/g, "")
        .toLowerCase()
        .split("");
    const invert = [...str].reverse();
    console.log(str, invert); // Comprobar estado de las variables
    for(let i in str){
        if(str[i] !== invert[i]){
        return false;
        }
    }
    return true;
}

console.log(palindrome("0_0 (: /-\ :) 0-0"));