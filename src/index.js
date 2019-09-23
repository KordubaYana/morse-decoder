const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

const dash = '11';
const point = '10';

function decode(expr) {
  const numberCode = expr.split('*').filter((item) => item != '');
  let result = '';
  for (let currentCode of numberCode) {
    const length = currentCode.length;
    let morseCode = '';
    for (let i = 0; i <= length; i += 2) {
      const code = currentCode[i] + currentCode[i + 1];
      if (i % 10 == 0 && i != 0) {
        result += MORSE_TABLE[morseCode];
        morseCode = '';
      }
      if (code === point) {
        morseCode += '.';
      }
      if (code === dash) {
        morseCode += '-';
      }
    }
    result += ' ';
  }
  return result.trim();
}

module.exports = {
  decode,
};
