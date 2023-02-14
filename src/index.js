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

function decode(expr) {
    let result = '';
    while (expr.length) {
        let symbol = expr.slice(0, 10);
        while (symbol.slice(0, 2) === '00') {
            symbol = symbol.slice(2);
        }
        if (symbol[0] === '*') {
            result += ' ';
        } else {
            let symbolMorse = '';
            while (symbol.length) {
                symbolMorse += symbol.slice(0, 2) === '10' ? '.' : '-';
                symbol = symbol.slice(2);
            }
            result += MORSE_TABLE[symbolMorse];
        }
        expr = expr.slice(10);
    }
    return result;
}

module.exports = {
    decode
}