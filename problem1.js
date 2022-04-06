const arr = [10,1,3,5,8,9];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[j] > arr[j+1]){
            let x = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = x;
        }
    }

    
}

console.log(arr);