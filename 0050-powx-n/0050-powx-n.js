/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
     const result = (x, n) => {
        if (n == 0 || x == 1) return 1;
        if (n % 2 == 0) {
            let y = result(x, n / 2);
            return y * y
        } else {
            return x * result(x, n - 1);
        }
    }
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    return result(x, n);
};