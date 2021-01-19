function countingValleys(steps, path) {
    let valleys = 0;
    let altitude = 0;
    
    for(let item of path) {
        if(item == "U") {
            altitude += 1;     
        } 
        else{
        altitude -= 1;
            if(altitude == -1) {
                valleys++;
            }
        }    
            
    }
    
    return valleys;

}

let steps = 8;
let path = ["U","D","D","D","U","D","U","U"];
const result = countingValleys(steps, path);