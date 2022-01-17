const palindromes = function (str) {
    str = str.toLowerCase();
    str = str.replace(/[^a-z]/g, '');

    let arr = str.split('');

    for (let front = 0, back = arr.length - 1; front < back; front++, back--)
    {
        if (arr[front] != arr[back])
        {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
