function capitalize(text: string) {
  return text && [text[0].toUpperCase(), ...text.slice(1)].join('')
}

function truncate(numero: number, length: number) {
  const ini = numero.toString().length - length;
  const fim = ini + length;
  return +numero.toString().substring(ini, fim)
}

function ignorarDigitos(numero: number, quantidade: number) {
  const referencia = Math.pow(10, quantidade);
  return Math.floor(numero / referencia) * referencia;
}

function invalid(): string {
  throw new RangeError('Number out of range for conversion.');
}

function ateZero(numero: number) {
  return numero < 0 && invalid() || numero === 0 && 'Zero' || ''
}

function de1a9(numero: number) {
  var dic = {
    1: 'um',
    2: 'dois',
    3: 'três',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove'
  };

  const zeroNumber = numero <= 0 && ateZero(numero)||'';
  var prefix = numero > 20 && ' e ' || '';
  numero = truncate(numero, 1);
  return zeroNumber.concat((numero > 0 && prefix || '').concat(capitalize(dic[numero]) || ''));
}

function de10a19(numero: number) {
  var dic = {
    10: 'dez',
    11: 'onze',
    12: 'doze',
    13: 'treze',
    14: 'quatorze',
    15: 'quinze',
    16: 'dezesseis',
    17: 'dezessete',
    18: 'dezoito',
    19: 'dezenove'
  };

  var prefix = numero > 20 && ' e ' || '';
  numero = truncate(numero, 2);
  return numero > 9 && numero < 20 && prefix.concat(capitalize(dic[numero])) || '';
}

function de20a90(numero: number) {
  var dic = {
    20: 'vinte',
    30: 'trinta',
    40: 'quarenta',
    50: 'cinquenta',
    60: 'sessenta',
    70: 'setenta',
    80: 'oitenta',
    90: 'noventa',
  };

  var prefix = numero > 99 && ' e ' || '';
  const sufix2 = de1a9(numero);
  numero = ignorarDigitos(truncate(numero, 2), 1)
  const prefix2 = capitalize(dic[numero]) || ''
  return (numero > 19 && numero < 99 && prefix || '').concat(prefix2).concat(sufix2)
}

function de1a99(numero: number) {
  return truncate(numero, 2) < 20 && de10a19(numero) || de20a90(numero);
}

function de100a199(numero: number) {
  var dic = {
    0: 'm',
    1: 'nto',
    100: 'ce'
  }
  const pluralIndex = +(numero % 100 !== 0)
  const sufix2 = de1a99(numero)
  numero = ignorarDigitos(truncate(numero, 3), 2);
  const prefix = numero > 99 && capitalize(dic[numero]) || '';
  const sufix1 = prefix && numero > 99 && dic[pluralIndex] || '';

  return prefix.concat(sufix1).concat(sufix2);
}

function de200a999(numero: number) {
  var dic = {
    200: 'duzentos',
    300: 'trezentos',
    400: 'quatrocentos',
    500: 'quinhentos',
    600: 'seiscentos',
    700: 'setecentos',
    800: 'oitocentos',
    900: 'novecentos',
  };

  const sufix = de1a99(numero);  
  numero = ignorarDigitos(truncate(numero, 3), 2);
  const prefix = capitalize(dic[numero] || '');

  return prefix.concat(sufix)
}

function de1a999(numero: number) {
  return truncate(numero, 3) < 200 && de100a199(numero) || de200a999(numero);
}

function de1000a1999(numero: number) {
  var dic = {
    1000: 'mil',
  };
  const sufix = de1a999(numero);
  numero = ignorarDigitos(truncate(numero, 4), 3);
  const prefix = numero > 999 && numero < 2000 && capitalize(dic[numero].concat(' ')) || '';
  return prefix.concat(sufix && sufix.trim() || '');
}

function de2000a999999(numero: number) {
  const sufix = de1a999(numero);
  numero = ignorarDigitos(truncate(numero, 6), 3);
  const fator = 1000;
  const milhar = numero / fator;
  const prefix = milhar && de1a999(milhar).concat(' Mil') || '';
  return prefix.concat(sufix && ' ' || '').concat(sufix && sufix.trim() || '')
}

function de1a999999(numero: number) {
  return truncate(numero, 6) < 2000 && de1000a1999(numero) || de2000a999999(numero)
}

function de1ma999999m(numero: number) {
  var dic = {
    0: 'ão',
    1: 'ões',
    1000000: 'milh',
  };

  const milhao = 1000000;
  const sufix2 = de1a999999(numero)
  numero = ignorarDigitos(truncate(numero, 9), 6);
  const prefix1 = numero >= milhao && de1a999(Math.floor(numero / milhao)).concat(' ') || ''
  const prefix2 = numero >= milhao && capitalize(dic[milhao]) || '';
  const prefix3 = numero && de1a999999(numero).concat(capitalize(dic[milhao])) || ''
  const sufix1 = prefix3 && (Math.floor(numero / milhao) == 1 && dic[0] || dic[1]).concat(' ') || ''

  return prefix1.concat(prefix2).concat(sufix1).concat(sufix2);
}

function de1ba999999b(numero: number) {
  var dic = {
    0: 'ão',
    1: 'ões',
    1000000000: 'bilh'
  };

  const bilhao = 1000000000;
  const sufix2 = de1ma999999m(numero)
  const bilhoes = Math.floor(numero / bilhao)
  const prefix1 = bilhoes > 0 && de1a999(bilhoes).concat(' ') || ''
  numero = ignorarDigitos(truncate(numero, 12), 9);
  const prefix2 = numero >= bilhao && capitalize(dic[bilhao]) || '';
  const prefix3 = numero && de1a999999(numero).concat(capitalize(dic[bilhao])) || ''
  const sufix1 = prefix3 && (numero / bilhao == 1 && dic[0] || dic[1]).concat(' ') || ''
  return prefix1.concat(prefix2).concat(sufix1).concat(sufix2);
}

export function integerToWords(numero: number) {
  return de1ba999999b(numero).trim();
}
