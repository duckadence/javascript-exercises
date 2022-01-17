const getTheTitles = function(arr) {

let arrTitle = [];

for (let count = 0; count < arr.length; count++)
{
    arrTitle.push(arr[count].title);
}

return arrTitle;
};

// Do not edit below this line
module.exports = getTheTitles;
