const findTheOldest = function(arr) {

let oldestAge = 0;
let oldestIndex = 0;

for (let count = 0; count < arr.length; count++)
{
    if (arr[count].yearOfDeath == null)
    {
        arr[count].yearOfDeath = 2022;
    }
    if (oldestAge < arr[count].yearOfDeath - arr[count].yearOfBirth)
    {
        oldestAge = arr[count].yearOfDeath - arr[count].yearOfBirth;
        oldestIndex = count;
    }
}

return arr[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
