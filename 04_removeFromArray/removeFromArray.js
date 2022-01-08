const removeFromArray = function(arr, e1, e2, e3, e4, e5) {
    let tempArr = [];
    let tempElement;
    let index = 0;

    for (let count = 0; count < arr.length; count++)
    {
        tempElement = arr[count];
        if (tempElement === e1 || tempElement === e2 || tempElement === e3 || tempElement === e4 || tempElement === e5)
        {
            continue;
        }
        else
        {
            tempArr[index] = tempElement;
            index++;
        }
    }

    return tempArr;
};

// Do not edit below this line
module.exports = removeFromArray;
