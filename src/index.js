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
};

function decode(expr) {
    const step = 10
    let symbol = ''
    let letter = ''
    let decodeStr = ''
    let fStr = ''
    while (expr.length){
        symbol = expr.slice(0,step)
        if(symbol === '**********'){
            fStr = fStr + ' '
        }else{
            symbol = symbol.slice(symbol.indexOf('1'))
            while(symbol.length){
                letter = symbol.slice(0,2)
                symbol = symbol.slice(2)
                if(letter === '10'){
                    letter = '.'
                }
                if(letter === '11'){
                    letter = '-'
                }
                decodeStr = decodeStr + letter
                
            }
            fStr = fStr + MORSE_TABLE[decodeStr] 
            decodeStr = ''
        }
        
        expr = expr.slice(step)
    }
    return fStr
}

module.exports = {
    decode
}