/* Напишіть функцію add, яка працювала б таким чином add(1)(2)(7)...(n). Кількість послідовних візів необмежена. */

function add(x: number) {
  //створюємо функцію, яка приймає 'y' і додає до 'x'.
  function addNext(y: number) {
    x += y;

    // Повертаємо функцію 'addNext' для створення ланцюгу виклику
    return addNext;
  }

  // Перевизначаємо метод 'toString' для 'addNext', щоб повернути поточну суму 'x'.
  addNext.prototype.toString = () => {
    return x;
  };

  // Повертаємо функцію addNext для всіх викликів, включаючи останній
  return addNext;
}

const result = add(1)(2)(7)(3)(5);
console.log(result); // Виведе 18
