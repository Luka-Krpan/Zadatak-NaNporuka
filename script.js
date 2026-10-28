let x = Number.NaN;
let text = "a ide na Mjesec ";
let bool = true / text;
// ba | NaN (number)| a ide na Mjesec (string)| NaN (boolean)| kad
console.log("ba" + x + text + bool + "kad");
console.log("'ba NaN' je " + typeof(x));
console.log("'a ide na Mjesec' je " + typeof(text));
console.log("'NaN kad' je " + typeof(bool));
