module.exports.function = function plus (left, right, operator) {
  let result = 0;
  operator = String(operator);
  
  if(operator == "더하기"){
    result = left + right;
  }else if(operator == "빼기"){
    result = left - right;
  }else if(operator == "곱하기"){
    result = left * right;
  }else if(operator == "나누기"){
    result = left / right;
  }
  
  return result;
}
