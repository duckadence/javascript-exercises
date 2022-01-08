const reverseString = function(str) {
    let arr = str.split("");
    let reverseStr = "";

    for (let count = arr.length - 1; count >= 0; count--)
    {
        reverseStr += arr[count];
    }
    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
