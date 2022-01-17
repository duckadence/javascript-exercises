const add = function(num1, num2) {
    return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
    let sum = 0;
	for(let count = 0; count < arr.length; count++)
    {
        sum += arr[count];
    }
    return sum;
};

const multiply = function(arr) {
    let product = 1
	for(let count = 0; count < arr.length; count++)
    {
        product *= arr[count];
    }
    return product;
};

const power = function(num, exp) {
    let result = num;
	for (let count = 1; count < exp; count++)
    {
        result *= num;
    }
    return result;
};

const factorial = function(num) {
	let factorial = 1;
    for (let count = num; count > 0; count--)
    {
        factorial *= count;
    }
    return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
