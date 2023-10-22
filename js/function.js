const checkStringLength = (string, maxStringLength) => string.length <= maxStringLength;

const isPalindromString = (string) => {
  string = string.toLowerCase().split(' ').join('');
  const reversedString = string.split('').reverse().join('');

  return string === reversedString;
};

const findNumbers = (input) => {
  const inputString = input.toString();
  let numbers = '';

  for (const char of inputString) {
    if (char >= '0' && char <= '9') {
      numbers += char;
    }
  }

  return numbers === '' ? NaN : +numbers;
};

checkStringLength('проверяемая строка', 20);
isPalindromString('Лёша на полке клопа нашёл ');
findNumbers('1 кефир, 0.5 батона');
