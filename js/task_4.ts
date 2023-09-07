/*Напишіть метод arrayToObject, який перетворює масив на об'єкт (використовувати рекурсію).*/

// Імпортуємо інтерфейс 'ObjectType'.
import { ObjectType } from "./types";

const arrayToObject = (item: any[]): ObjectType => {
  // Якщо item не масив повертає item.
  if (!Array.isArray(item)) {
    return item;
  }

  // Порожній об'єкт, який буде результатом
  const object: ObjectType = {};

  for (const element of item) {
    // Визначаємо ключ і значення
    const [key, value] = element;

    // Перевіряється, чи value є масивом. Якщо воно є масивом, то буде виклик arrayToObject(value) для перетворення цього масиву в об'єкт.
    if (Array.isArray(value)) {
      object[key] = arrayToObject(value);
    } else {
      // Якщо ні, то просто додоється до об'єктy
      object[key] = value;
    }
  }

  // Повертає отриманий об'єкт object, який містить усі ключі та значення з вхідного масиву.
  return object;
};

const arr = [
  ["name", "developer"],
  ["age", 5],
  [
    "skills",
    [
      ["html", 4],
      ["css", 5],
      ["js", 5],
    ],
  ],
];

console.log(arrayToObject(arr));
