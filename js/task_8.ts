/* Напишіть функцію, яка бере об'єкт будь-якої вкладеності і перетворює її на єдину плоску карту з різними рівнями, розділеними косою межею ( '/'). */

// Імпортуємо інтерфейс 'AnyObject'.
import { ObjectType } from "./types";

const mapObject = (obj: ObjectType) => {
  // Створюємо порожній об'єкт для зберігання результату.
  const result = {};

  function recurse(item: ObjectType, parentKey: string = ""): void {
    // Перебираємо всі пари ключ-значення об'єкта item.
    for (const [key, value] of Object.entries(item)) {
      // Формуємо новий ключ
      let newKey: string = parentKey ? `${parentKey}/${key}` : key;

      // Перевіряємо, чи значення є об'єктом і не масивом.
      if (typeof value === "object" && !Array.isArray(value)) {
        // Якщо так, викликаємо функцію для обробки вкладеного об'єкта.
        recurse(value, newKey);
      } else {
        // Якщо значення не є об'єктом, зберігаємо його в об'єкт 'result' за новим ключем.
        result[newKey] = value;
      }
    }
  }

  // Викликаємо рекурсивну функцію
  recurse(obj);
  return result;
};

const obj = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
};

mapObject(obj);
/* Outputs: {
    'a/b/c': 12,
    'a/b/d': 'Hello World',
    'a/e': [1,2,3]
  } */
