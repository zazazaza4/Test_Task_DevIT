/*Напишіть функцію deepEqual для перевірки двох об'єктів на ідентичність.*/

// Імпортуємо інтерфейс 'ObjectType'.
import { ObjectType } from "./types";

//Функція визначає, чи є переданий аргумент об'єктом
const isObject = (object: ObjectType): boolean => {
  return object != null && typeof object === "object";
};

const deepEqual = (obj1: ObjectType, obj2: ObjectType): boolean => {
  //Порівнюємо по посиланню, якщо вірність істина - вони є ідентичними
  if (obj1 === obj2) {
    return true;
  }

  // Яякщо типи об'єктів різні, вони не можуть бути ідентичними.
  if (typeof obj1 !== typeof obj2) {
    return false;
  }

  // Якщо хоча б один із об'єктів не є об'єктом, просто порівнюємо їх.
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2;
  }

  // Отримуємо ключи об'єктів
  const keys1: string[] = Object.keys(obj1);
  const keys2: string[] = Object.keys(obj2);

  // Якщо кількість різна, то об'єкти не рівні
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Рекурсивне порівняння властивостей об'єктів.
  for (const key of keys1) {
    const value1 = obj1[key];
    const value2 = obj2[key];

    if (!deepEqual(value1, value2)) {
      return false;
    }
  }

  return true;
};

console.log(deepEqual({ name: "test" }, { name: "test" })); // Output: true
console.log(deepEqual({ name: "test" }, { name: "test1" })); // output false
console.log(
  deepEqual(
    { name: "test", data: { value: 1 } },
    { name: "test", data: { value: 2 } }
  )
); // output false
console.log(deepEqual({ name: "test" }, { name: "test", age: 10 })); // false
