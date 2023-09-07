/*Є функція primitiveMultiply, яка множить числа, але випадково може викидати винятки типу: NotificationException, ErrorException. 
Завдання написати функцію обгортку, яка буде повторювати обчислення 
при виключенні NotificationException, але припиняти роботу при винятках ErrorException */

function NotificationException() {}
function ErrorException() {}
function primitiveMultiply(a: number, b: number): number {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

function reliableMultiply(a: number, b: number): number {
  try {
    // Спробуємо виконати множення. Якщо воно пройде успішно, повернемо результат обчислення.
    return primitiveMultiply(a, b);
  } catch (e) {
    // Якщо отримано помилку типу NotificationException.
    if (e instanceof NotificationException) {
      return reliableMultiply(a, b); // Рекурсивно повторюємо спробу множення.
    } else if (e instanceof ErrorException) {
      throw e; // Прокидуємо вибране виключення ErrorException наверх.
    }
  }

  // Дефолтне значення.
  return 0;
}

console.log(reliableMultiply(8, 8));
