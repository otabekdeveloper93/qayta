let n = 8;
let k = 2;
let a = 0;


for (let i = 0; i <= n; i++) {
    let b = 1;
    if(i > 1){  
        for (let j = 0; j < k; j++) {
            b *= i;
            console.log(b);
        }
        a+= b;
    }else if(i == 1){
        a+=b
    }    
}

console.log(a);
