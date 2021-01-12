const fibo = (n) =>{
    fibArray = [0,1]

    for(var i = 2; i < n; i++){
        fibArray.push(fibArray[i-2] + fibArray[i-1]);
    }

    return fibArray;
}

console.log(fibo(11));