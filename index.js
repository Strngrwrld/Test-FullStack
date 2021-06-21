/*This project implements the conversion from Roman to Arabic numbers, 
it is validated that the values ​​correspond to a Roman number that can be written 
in uppercase or lowercase.*/

export const roman_to_arabic = (roman) => {
  //valid roman number combination upper and down case
  const roman_rule =
    /^(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})$/i;

  if (roman == undefined || !roman_rule.test(roman)) {
    return "It´s not a valid roman number";
  }

  return evaluate_roman(roman);
};

function evaluate_roman(roman) {
  var roman = roman.toUpperCase(),
    lookup = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 },
    arabic = 0,
    i = roman.length;
  //evaluates if the character is less than than the next character
  //if the condition is satisfied, it is subtracted from the accumulated if not added
  while (i--) {
    if (lookup[roman[i]] < lookup[roman[i + 1]]) arabic -= lookup[roman[i]];
    else arabic += lookup[roman[i]];
  }
  return arabic;
}
