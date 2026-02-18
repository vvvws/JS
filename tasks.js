console.log("--- 1.1 (вывод трёх чисел через один пробел) ---");
    console.log("1-1:", 31, 18, 79);

console.log("--- 1.2 (три числа через два пробела) ---");
 console.log("1-2:", 47 + '  ' + 52 + '  ' + 150);


 console.log("--- 1.3 (два числа одно под другим) ---");
     console.log("1-3:"); console.log(50); console.log(10);

    console.log("--- 1.4 (три числа одно под другим) ---");
    console.log("1-4:"); console.log(5); console.log(10); console.log(21);


    console.log("--- 1.5 (вывод 1 и 2 на отдельных строках) ---");
    console.log("1-5:"); console.log(1); console.log(2);

    console.log("--- 1.6 (число π с тремя знаками) ---");
    let e6 = 3.1415926;
    console.log("1-6:", e6.toFixed(3));
    

    console.log("--- 1.7 (число e с точностью до десятых) ---");
    let pi7 = 2.71828;
    console.log("1-7:", pi7.toFixed(1));

  
    console.log("--- 1.8 (вывод числа с предшествующим сообщением, ввод заменён на константу) ---");
    let num8 = 95; // вместо prompt
    console.log("8-1:", "Вы ввели:", num8);

    console.log("--- 1.9 (вывод числа с последующим сообщением) ---");
    let num9 = 95;
    console.log("9-1:", num9, "– вот какое число ты ввел");

console.log("--- 1.10 (запрос имени и повтор) ---");
// // 1. Запрос Имени
let firstName = "";
while (!firstName || firstName.trim() === "") {
firstName = prompt("Введите ваше имя:");
}
// 2. Запрос Фамилии
let lastName = "";
while (!lastName || lastName.trim() === "") {
lastName = prompt("Введите вашу фамилию:");
}
// 3. Запрос Возраста (с проверкой на число)
let age;
while (true) {
    let input = prompt("Введите ваш возраст:");
    age = Number(input);
    if (input && !isNaN(age) && age > 0) break;
    alert("Пожалуйста, введите корректное число для возраста.");
}
// 4. Запрос Города
let city10 = "";
while (!city10 || city10.trim() === "") {
    city10 = prompt("Введите ваш город:");
}
// Вывод результатов
console.log("10-1: Имя -", firstName);
console.log("10-2: Фамилия -",  lastName);
console.log("10-3: Город -", city10);
console.log("10-4: Приветствие -", `Привет, ${firstName}! Тебе уже ${age}.`);
let full10 = `${firstName} ${lastName}`;
console.log("10-5: Полное имя -", full10);
console.log("10-6: В верхнем регистре -", full10.toUpperCase());

console.log("--- 1.11 (название команды + фраза) ---");
//Запрашиваем название команды
let team11 = prompt("Введите название вашей любимой команды:", "Спартак");
// // Если пользователь нажал "Отмена", задаем значение по умолчанию
if (!team11) {
    team11 = "Ваша команда";
}

// // Выводим результат
console.log("11-1:", `${team11} – лучшая команда!`);

console.log("--- 1.12 (приветствие с именем) ---");
let firstName = "";
while (!firstName || firstName.trim() === "") {
    firstName = prompt("Введите ваше имя:");
}
console.log("12-1: Здравствуйте -", firstName);
    console.log("--- 1.13 (следующее и предыдущее число) ---");
    let num13 = 195;
    console.log("13-1:", "Для числа", num13, "следующее –", num13+1, "предыдущее –", num13-1);
    let n13 = 519;
    console.log("13-2:", "Следующее:", n13+1, "Предыдущее:", n13-1);
    let m13 = -159;
    console.log("13-3:", m13+1, "– следующее за", m13, ",", m13-1, "– предыдущее");
    let x13 = 915;
    console.log("13-4:", "Число", x13, ": +1 =", x13+1, ", -1 =", x13-1);
    let z13 = 0;
    console.log("13-5:", "После", z13, "идёт", z13+1, ", до", z13, "было", z13-1);
    console.log("");

    console.log("--- 1.14 (три числа с двумя пробелами) ---");
    let a14=195, b14=519, c14=915;
    console.log("14-1:", a14 + ' ' + b14 + ' ' + c14);

    console.log("--- 1.15 (четыре числа с одним пробелом) ---");
    let a15=519, b15=195, c15=915, d15=159;
    console.log("15-4:", [a15,b15,c15,d15].join(' '));

    console.log("--- 16 (вывод с переменными t, v, x, y) ---");

let t16 = 5, v16 = 10, x16 = 100, y16 = 25;

// Используем \t для создания колонок
console.log(`а) ${t16} ${v16}\tб) ${x16} t\tв) x ${y16}`);
console.log(`   7 см\t   1949 v\t    x  y`);
    console.log("--- 17 (вывод с переменными a, b, x, y) ---");
let a = 1, b = "b", x = "x", y = "y";
console.log("Результат:");
console.log("а) 2 кг\t\tб) а " + a + "\t\tв) " + x + " " + y);
console.log("   13 17 19\t   " + b + " 5\t\t   " + y);

    
