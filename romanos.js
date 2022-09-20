function convertToRoman(num,ant="") {
    const rom = {
        norm:{
            I:1,
            II:2,
            III:3,
            IV:4,
            V:5,
            VI:6,
            VII:7,
            VIII:8,
            IX:9
        },
        dec:{    
            X:10,
            XX:20,
            XXX:30,
            XL:40,
            L:50,
            LX:60,
            LXX:70,
            LXXX:80,
            XC:90
        },
        cen: {
            C:100,
            CC:200,
            CCC:300,
            CD:400,
            D:500,
            DC:600,
            DCC:700,
            DCCC:800,
            CM:900
        },
        mll:{
            M:1000,
            MM:2000,
            MMM:3000
        }
    }
    const addZero = (num, zeros)=>{
        let newNum = String(num);
        for(let i = 1; i <= zeros; i++){
            newNum += "0";
        }
        return Number(newNum);
    }
    let longitud = String(num).length;
    let nums_split = String(num).split("");
    let romano = "" + ant;
    if(longitud === 4){
        for(let sim in rom.mll){
            if(addZero(nums_split[0],3)===rom.mll[sim]){
                return ((num - rom.mll[sim]) === 0)? convertToRoman(0,(romano + sim)): convertToRoman((num - rom.mll[sim]),romano + sim);
            }
        }
    }else if(longitud === 3){
        for(let sim in rom.cen){
            if(addZero(nums_split[0],2)===rom.cen[sim]){
                return ((num - rom.cen[sim]) === 0)? convertToRoman(0,(romano + sim)): convertToRoman((num - rom.cen[sim]),romano + sim);
            }
        }
    }else if(longitud === 2){
        for(let sim in rom.dec){
            if(addZero(nums_split[0],1)===rom.dec[sim]){
                return ((num - rom.dec[sim]) === 0)? convertToRoman(0,(romano + sim)): convertToRoman((num - rom.dec[sim]),romano + sim);
            }
        }
    }else if(longitud === 1){
        if(num == 0){
            return romano;
        }
        for(let sim in rom.norm){
            if(Number(nums_split[0]) ===rom.norm[sim]){
                return ((num - rom.norm[sim]) === 0)? convertToRoman(0,(romano + sim)): convertToRoman((num - rom.norm[sim]),sim);
            }
        }
    }
}

console.log(convertToRoman(3999));
console.log(convertToRoman(69));
console.log(convertToRoman(1243));

// const addZero = (num, zeros)=>{
//     let newNum = String(num);
//     for(let i = 1; i <= zeros; i++){
//         newNum += "0";
//     }
//     return Number(newNum);
// }

// console.log(addZero(1,0));


// Solucion mas simplificada -> Simplificar mi solucion
// function convert(num) {
//     var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1];  
//     var romans =["m","cm","d","cd","c","xc","l","xl","x","ix","v","iv","i"];  
//     var str = '';  
//     nums.forEach (function (item, index, romans) {// Compara el número a convertir en un bucle
//         while(num >= item){  
//             str += romans[index]; // Convertido en los números romanos correspondientes
//         num -= item;  
//         }  
//     });  
//     return str.toUpperCase (); // Todo convertido a mayúsculas
// }
// convert(36);