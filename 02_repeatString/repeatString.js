const repeatString = function(string, num) {
    if (num < 0)
    {
        return "ERROR";
    }

    let temp = "";

    for (let count = 0; count < num; count++)
    {
        temp += string;
    }
    return temp;
};

// Do not edit below this line
module.exports = repeatString;
