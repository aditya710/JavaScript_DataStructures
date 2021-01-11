var word = "racecar";

var rword = "";

var letters = [];

//putting the letters into the stack
for(var i = 0; i < word.length; i++){   
    letters.push(word[i]);
}

//pop off the stack in reverse order
for(var j = 0; j < word.length; j++){
    rword += letters.pop();
}

if (rword === word){
    console.log("this is a palindrome");
}
else{
    cosnsole.log("this is not a palindrome")
}

function palindrom(str) {
    var reverse = str.split('').reverse().join('')
    if (str == reverse) {
        return "Palindrom" 
    } else {
        return " NOt Palindrom" 

    }
}

console.log(palindrom("OLLLO"))

