function isNumber(numStr){
  var re = /^[0-9\.\-]+$/;
  return re.test(numStr);
}

function add(num1, num2){
  return num1 + num2;
}

function substract(num1, num2){
  return num1 - num2;
}

function multiplication(num1, num2){
  return num1 * num2;
}

function division(num1, num2){
  return num1 / num2;
}

module.exports.add = add;
module.exports.substract = substract;
module.exports.multiplication = multiplication;
module.exports.division = division;
module.exports.isNumber = isNumber;
