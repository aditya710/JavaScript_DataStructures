
    ar = []
    var result = 0;
    
    var dict = {};
    for (let item of ar) {
  // code block to be executed
        if (item in dict){
            dict[item] += 1
        }
        else{
            dict[item] = 1    
        }
    }
    var answer = 0
    for (let elm of Object.keys(dict)){
        var answer =answer+ Math.floor(dict[elm]/2)
    }
    return answer

