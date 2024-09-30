// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
  let letters = [];

  for (let i = 0; i < str.length; i++) {
    if (!isDigit(str[i])) {
      letters.push(str[i]);
    }
  }

  letters.reverse();

  return letters.join('');
}

function isDigit(char) {
  return char >= '0' && char <= '9';
}

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;