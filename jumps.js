function jumpCount(c){
    var totalJumps = 0;
    var n = c.length;
    var i = 0;
        
while(i < n){
    if((i+2 < n) && (c[i+2] == 0)){
        i = i+2;
        totalJumps += 1
    }
    else if((i+1 < n) && (c[i+1] == 0)){
        i = i+1;
        totalJumps += 1
    }
    else{
        i = i + 1;
    }

    }

    return totalJumps;
}    

console.log(jumpCount([0, 0, 0, 0, 1, 0]));

