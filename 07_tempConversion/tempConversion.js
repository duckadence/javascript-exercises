const ftoc = function(tempF) {

    let tempC;

    tempC = (tempF - 32) * (5/9);

    tempC = Math.round(tempC * 1e1) / 1e1;

    return tempC;
};

const ctof = function(tempC) {

    let tempF;

    tempF = (tempC * (9/5)) + 32;
    
    tempF = Math.round(tempF * 1e1) / 1e1;

    return tempF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
