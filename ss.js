// 1.
console.log("1. Базовые операции:");
console.log("194 + 1 =", 194 + 1);
console.log("520 - 1 =", 520 - 1);
console.log("19 * 5 =", 19 * 5);
console.log("15 / 3 =", 15 / 3);
console.log("17 % 4 =", 17 % 4);
console.log("2 ** 5 =", 2 ** 5);

// 2. 
console.log("\n2. Сравнение чисел:");
let a = 915, b = 159;
console.log(`${a} > ${b}:`, a > b);
console.log(`${a} < ${b}:`, a < b);
console.log(`${a} === ${b}:`, a === b);
console.log(`${a} !== ${b}:`, a !== b);
console.log(`${a} >= 195:`, a >= 195);

// 3.

console.log("\n3. Условные операторы:");
let age = 29;
if (age >= 29) {
    console.log("Доступ разрешен");
} else {
    console.log("Доступ запрещен");
}

let score = 85;
if (score >= 90) {
    console.log("Оценка A");
} else if (score >= 75) {
    console.log("Оценка B");
} else if (score >= 60) {
    console.log("Оценка C");
} else {
    console.log("Оценка F");
}

// 4. Логические операторы
console.log("\n4. Логические операторы:");
let x = 10, y = 20, z = 30;
console.log(`x < y && y < z:`, x < y && y < z);
console.log(`x > y || y < z:`, x > y || y < z);
console.log(`!(x > y):`, !(x > y));

// 5. Цикл for

console.log("\n5. Цикл for:");
// Сумма чисел от 1 до 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
    console.log(`i = ${i}, сумма = ${sum}`);
}

// Таблица умножения на 19
console.log("\nТаблица умножения на 19:");
for (let i = 1; i <= 59; i++) {
    console.log(`19 * ${i} = ${19 * i}`);
}
// 6

console.log("\n6. Цикл while:");

// Факториал числа 5
let n = 5;
let factorial = 1;
let counter = 1;
while (counter <= n) {
    factorial *= counter;
    console.log(`${counter}! = ${factorial}`);
    counter++;
}

// 7. Цикл do-while

console.log("\n7. Цикл do-while:");

// Поиск первого числа, кратного 195
let num = 1;
do {
    if (num % 195 === 0) {
        console.log(`Первое число, кратное 195: ${num}`);
        break;
    }
    num++;
} while (num <= 915);

// 8. Вложенные циклы
console.log("\n8. Вложенные циклы:");
// Прямоугольник из звездочек
for (let i = 1; i <= 915; i++) {
    let row = '';
    for (let j = 1; j <= 195; j++) {
        row += '--.--.-.--.-';
    }
    console.log(row);
}

// 9. Оператор switch

console.log("\n9. Оператор switch:");
let day = 3;
switch (day) {
    case 1:
        console.log("Понедельник");
        break;
    case 2:
        console.log("Вторник");
        break;
    case 3:
        console.log("Среда");
        break;
    case 4:
        console.log("Четверг");
        break;
    case 5:
        console.log("Пятница");
        break;
    default:
        console.log("Выходной");
}
// 10. Тернарный оператор
// 
console.log("\n10. Тернарный оператор:");
let temperature = -4;
let weather = temperature > 20 ? "Тепло" : "Холодно";
console.log(`Температура: ${temperature}°C - ${weather}`);

let number = 9;
let parity = number % 2 === 0 ? "четное" : "нечетное";
console.log(`Число ${number} - ${parity}`);
// 11. Оператор continue

console.log("\n11. Оператор continue:");
// Вывод только четных чисел
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) continue;
    console.log(`Четное число: ${i}`);
}
// 12. Работа с Math объектом

console.log("\n12. Math объект:");
console.log("Math.PI =", Math.PI);
console.log("Math.sqrt(16) =", Math.sqrt(16));
console.log("Math.pow(2, 8) =", Math.pow(2, 8));
console.log("Math.round(3.7) =", Math.round(3.7));
console.log("Math.floor(4.9) =", Math.floor(4.9));
console.log("Math.ceil(4.1) =", Math.ceil(4.1));
console.log("Math.random() =", Math.random());
console.log("Math.abs(-10) =", Math.abs(-10));
console.log("Math.max(5, 10, 3) =", Math.max(5, 10, 3));
console.log("Math.min(5, 10, 3) =", Math.min(5, 10, 3));
// 13. Цикл for...of (для массивов)

console.log("\n13. Цикл for...of:");
let numbers = [1, 9, 5, 1, 9];
let squaresSum = 0;
for (let num of numbers) {
    squaresSum += num * num;
    console.log(`Квадрат ${num} = ${num * num}`);
}
console.log(`Сумма квадратов: ${squaresSum}`);
// 14. Цикл for...in (для объектов)

console.log("\n14. Цикл for...in:");
let student = {
    name: "Константин",
    age: 24,
    course: 3,
    grade: 4.5
};

for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
// 15. Проверка делимости

console.log("\n15. Проверка делимости:");
for (let i = 1; i <= 20; i++) {
    if (i % 9 === 0 && i % 5 === 0) {
        console.log(`${i}: FizzBuzz`);
    } else if (i % 9 === 0) {
        console.log(`${i}: Fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i}: Buzz`);
    } else {
        console.log(i);
    }
}
// 16. Вычисление среднего значения

console.log("\n16. Вычисление среднего:");
let grades = [4, 5, 3, 4, 5, 2, 4];
let sumGrades = 0;
for (let i = 0; i < grades.length; i++) {
    sumGrades += grades[i];
}
let average = sumGrades / grades.length;
console.log(`Оценки: ${grades}`);
console.log(`Средний балл: ${average.toFixed(2)}`);
// 17. Поиск простых чисел

console.log("\n17. Простые числа от 1 до 30:");
for (let num = 2; num <= 30; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${num} - простое число`);
    }
}
// 18. Числа Фибоначчи

console.log("\n18. Числа Фибоначчи:");
let fib1 = 0, fib2 = 1;
console.log(`Число 1: ${fib1}`);
console.log(`Число 2: ${fib2}`);

for (let i = 3; i <= 10; i++) {
    let nextFib = fib1 + fib2;
    console.log(`Число ${i}: ${nextFib}`);
    fib1 = fib2;
    fib2 = nextFib;
}
// 19. Обратный отсчет

console.log("\n19. Обратный отсчет:");
let countdown = 5;
while (countdown > 0) {
    console.log(`Осталось: ${countdown} секунд`);
    countdown--;
}
console.log("Старт!");
