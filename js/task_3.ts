/* Напишіть функцію обгортки, яка на вхід приймає масив функцій та їх параметрів, а повертає масив результатів виконання. 
Кількість аргументів виконуваної функції не обмежена! */

const bulkRun = async (array: Array<[Function, any[]]>): Promise<any[]> => {
  const result: any[] = [];

  // Перебираємо кожну пару функція-параметри та повертаємо масив промісів.
  //
  const promises = array.map(async ([func, params]) => {
    await new Promise<void>((resolve) => {
      // Виклик функції з наданими параметрами (spread operator) та callback функцією.
      func(...params, (value: any) => {
        result.push(value);
        // resolve вказає на завершення промісу.
        resolve();
      });
    });
  });

  // Зачекайте, поки завершаться всі проміси, перш ніж повертати масив 'result'.
  await Promise.all(promises);
  return result;
};

const f1 = (cb) => {
  cb(1);
};

const f2 = (a, cb) => {
  cb(a);
};

const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log);
// Output: [1, 2, [3, 4]]
