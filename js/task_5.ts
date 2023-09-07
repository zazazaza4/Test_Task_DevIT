/*Написати зворотний метод (див. задачу 4) об'єктаArray, який з об'єкта створить масив.*/

// Імпортуємо інтерфейс 'ObjectType'.
import { ObjectType } from "./types";

const objectToArray = (item: ObjectType): any[] => {
  if (typeof item !== "object") {
    // Якщо item не є об'єктом, повертаємо масив, що містить пару [ключ, значення].
    return [[item, item]];
  }

  // Порожній масив, який буде результатом.
  const array: any[] = [];

  for (const [key, value] of Object.entries(item)) {
    // Перевіряємо, чи значення є об'єктом і не масивом.
    if (typeof value === "object" && !Array.isArray(value)) {
      //Якщо значення є об'єктом, додаємо пару [ключ, результат виклику objectToArray(value)] в масив.
      array.push([key, objectToArray(value)]);
    } else {
      // Якщо значення не є об'єктом, додаємо пару [ключ, значення] в масив.
      array.push([key, value]);
    }
  }

  // Повертаємо отриманий масив
  return array;
};

const object = {
  name: "developer",
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
  },
};

console.log(objectToArray(object));
