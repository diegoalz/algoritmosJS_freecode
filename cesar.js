function rot13(str) {
    let abcd = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let rot_13 = "NOPQRSTUVWXYZABCDEFGHIJKLM";
    let new_str = "";
    for(let letra of str){
        if(!abcd.includes(letra)){
            new_str += letra;
        }else{
            for(let indice in rot_13){
                if(letra == rot_13[indice]){
                    new_str += abcd[indice];
                }
            }
        }
    }
    return new_str;
}

console.log(rot13("SERR PBQR PNZC"));

//Forma simplificada
// function rot13(message) {
//     var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
//     return message.replace(/[a-z]/gi, (c) => b[a.indexOf(c)]);
// }