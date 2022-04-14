
function isAString(input) {
    if (typeof input === "string"){
        return true;
    }
     else{
            return false;
            return typeof input === "string"
    }
}

function canBeANumber(input){
    return !isNaN(Number(input));
}
function mulitplyByTen(input){
    if(!canBeANumber(input)){
        return false;
    }else{
        return input * 10;
    }
}
function randomNumber(input){
    return (Math.random() * input);
}
function stringLength(string){
    return string.toString().length;
}
function indexOfCharacter(input1, input2){
    if (input2.length > 1 || input1.indexOf(input2) === -1){
        return input1.indexOf(input2); }}


