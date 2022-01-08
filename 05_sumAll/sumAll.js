const sumAll = function(num1, num2) {
  
    if (Number.isInteger(num1) && Number.isInteger(num2) && num1 >= 0 && num2 >= 0)
    {
        let sum = 0;

        if (num1 > num2)
        {
            first = num2;
            second = num1;
        }
        else
        {
            first = num1;
            second = num2;
        }

        for (let count = first; count <= second; count++)
        {
            sum += count;
        }
        return sum;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
