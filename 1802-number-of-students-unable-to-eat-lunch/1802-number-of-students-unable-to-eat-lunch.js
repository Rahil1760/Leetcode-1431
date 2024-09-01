/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let rounds = 0;
    let stack = [...sandwiches];
    let queue = [...students];
    
    while (stack.length > 0 && rounds < queue.length) {
        if (stack[0] === queue[0]) {
            stack.shift();
            queue.shift();
            rounds = 0;
        } else {
            queue.push(queue.shift());
            rounds++;
        }
    }

    return queue.length;
};