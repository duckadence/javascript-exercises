const fibonacci = function(num) {

if (num < 0)
{
    return 'OOPS';
}

let num1 = 1;
let num2 = 1;
let temp;

for (let count = num; count > 1; count--)
{
    temp = num2;
    num2 += num1;
    num1 = temp;
}

return num1;
};

// Do not edit below this line
module.exports = fibonacci;
