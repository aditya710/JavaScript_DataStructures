var Stack = function(){
    this.count = 0;
    this.structure = {};
}

this.pop = () => {
    if(this.count == 0){
        return undefined;
    }
}