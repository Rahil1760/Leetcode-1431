/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    let chunks = 0;
    let max = 0;
    for(let i =0;i<arr.length;i++){
    max = Math.max(arr[i],max)
    if(i == max){
        chunks++
    }
    }
    return chunks;
};