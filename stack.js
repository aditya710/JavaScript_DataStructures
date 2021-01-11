var Stack = function(){
    this.count = 0;
    this.storage = {};


//Removes and returns the value at the end of the stack
this.pop = function(){
    if(this.count == 0){
        return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

//Adds item at the end of the stack
this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
}

this.size = function(){
    return this.count;
}

//Returns the last item of the stack
this.peek = function(){
    return this.storage[this.count-1];
}
}


var myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
console.log(myStack.storage);