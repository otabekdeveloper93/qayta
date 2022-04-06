let newarr = [7,5,3,2];
 
let ad  = Math.ceil(newarr.length/2);

let aray = newarr.splice(0, ad);
let laray = newarr.splice(-ad);

let ar1 = aray[0];
let ar2 = laray[0];

laray[0] = ar1;
aray[0] = ar2;

for (let i = 0; i < aray.length; i++) {
    newarr.push(aray[i])
}
for (let i = 0; i < laray.length; i++) {
    newarr.push(laray[i])
}


console.log(newarr);