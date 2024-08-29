/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i =0;i<s.length;i++){
        let char = s.charAt(i);
        if(char === '('){
            stack.push('(')
        }
        else if(char == '['){
            stack.push('[')
        }
        else if(char == '{'){
            stack.push('{')
        }
        // closing bracket
        if(char === ')'){
            if(stack.length == 0){
                return false;
            }
            else if(stack[stack.length-1] !== '('){
                return false
            }
            else{
                stack.pop();
            }
        }
        else if(char == ']'){
              if(stack.length == 0){
                return false;
            }
            else if(stack[stack.length-1] !== '['){
                return false
            }
            else{
                stack.pop();
            }
        }
        else if(char == '}'){
               if(stack.length == 0){
                return false;
            }
            else if(stack[stack.length-1] !== '{'){
                return false
            }
            else{
                stack.pop();
            }
            }
        }
         
    
    if(stack.length > 0){
        return false; 
    }
    else{
        return true;
    }
};