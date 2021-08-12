const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '*****':  ' ',
};

function decode(expr) {
  let exprChange = [];
  let exprChangeBreak = []
  let code = '';
  let size = 5; 
    

  for ( let i = 0; i < expr.length; i= i + 2) {
    exprChange.push(expr[i] + expr[i+1])
  }

  for (let i = 0; i < exprChange.length; i++) {

    if ( exprChange[i]=== '10') {
      exprChange.splice(i, 1, '.')
    } else if (exprChange[i] === '11') {
      exprChange.splice(i, 1, '-')
    } else if (exprChange[i]=== '00') {
      exprChange.splice(i, 1, '')
    } else if (exprChange[i]=== '**') {
      exprChange.splice(i, 1, '*')
    }
    
  }

  for (let i = 0; i < Math.ceil(exprChange.length/size); i++){

    exprChangeBreak[i] = exprChange.slice((i*size), (i*size) + size).join("")

    for ( let key in MORSE_TABLE) {
      if(key == exprChangeBreak[i]) {
        code += MORSE_TABLE[key]
      }
    }

  }


  return code
}

module.exports = {
    decode
}