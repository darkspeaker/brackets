module.exports = function check(str, bracketsConfig) {
    let checkString = str;
    let stack = []
    for(let i = 0; i <= checkString.length; i++){
        if(checkString[i] === '(' || checkString[i] === '[' || checkString[i] === '{'){
            stack.push(checkString[i]);
            console.log(stack)
        }
        else if(checkString[i] === ')' || checkString[i] === ']' || checkString[i] === '}'){
            if(stack.length > 0){
                stack.pop()
            }
            else{
                return false
            }
        }
    }
   
    if(stack.pop()) return false;
    return true;
}
