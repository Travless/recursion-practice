function fibs(num){
    let array = [0, 1];
    for(let i = 2; i < num; i++){
        array[i] = array[i - 1] + array[i - 2];
    }
    return array;
};

console.log(fibs(10));