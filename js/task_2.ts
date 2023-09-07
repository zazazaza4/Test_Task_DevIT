/* Напишіть функцію генератора chunkArray, яка повертає ітератор повертає частини масиву зазначеної довжини. */

const chunkArray = function* (array: number[], size: number) {
  // Створюємо копію масиву, щоб запобігти зміні вхідного масиву.
  const copyArray: number[] = [...array];

  // Виконуємо доки довжина масиву не буде менше size.
  while (copyArray.length > size) {
    // Повертаємо ітератор і повертається підмасив, який був видалений.
    yield copyArray.splice(0, size);
  }

  // Повертаємо  останній підмасив, що залишився в copyArray
  yield copyArray;
};

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next()); // { value: [1,2,3], done: false }
console.log(iterator.next()); // { value: [4,5,6], done: false }
console.log(iterator.next()); // { value: [7,8], done: false }
console.log(iterator.next()); // { value: undefined, done: true }
