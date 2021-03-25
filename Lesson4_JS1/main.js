//task1
//Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
let str = 'Привет', num = 123, flag = true, txt = 'true';
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

//task2
// Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.
let a1 = 5 + 3;
let a2 = 5 - 3;
let a3 = 5 * 3;
let a4 = 5 / 3;
let a5 = 5 % 3;
console.log(a1, a2, a3, a4, a5);

// task3
//Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'
let a6 = 5 % 3;
let a7 = 3 % 5;
let a8 = 5 + '3';
let a9 = '5' - 3;
let a10 = 75 + 'кг'
console.log(a6, a7, a8, a9, a10);

// task4
//Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
let height = 23;
let widht = 10;
let s = height * widht;
console.log(s);

//task5
//Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
let heightC = 10;
let dC = 4 / 2;
const PI = 3.14;
let sC = PI * Math.pow(dC, 2);
let v = sC * heightC;
console.log(v);

//task6
//У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).
let n1 = 3, n2 = 4;
let c = n1 ** 2 + n2 ** 2;
console.log(c);

//task7
// Напишите скрипт, который выводит "Hello world",
// создавши переменную str и выводить спомощью document.write, alert и console.log
let Str = "Hello world";
document.write(Str);
console.log(Str);
alert(Str);

// task8
// Вывести в окно браузера при помощи метода alert() следующие данные:
// Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
let surname = 'Klymash';
let name = 'Andriy';
let patronymic = 'Romanovych'
alert(`${surname}\n${name} \n${patronymic}`);

// task9
//Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write
let str_1 = 'Хто';
let str_2 = 'ти';
let str_3 = 'такий?';
let concatenation = str_1 + ' ' + str_2 + ' ' + str_3;
document.write(concatenation);

// task10
// Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let Str_1 = "20";
let a = 5;
document.write(Str_1 + a + "<br/>"); //205
document.write(Str_1 - a + "<br/>"); //15
document.write(Str_1 * "2" + "<br/>"); //40
document.write(Str_1 / 2 + "<br/>"); //10

//task11
// Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//     parseInt("3.14")
//     parseInt("-7.875")
//     parseInt("435")
//     parseInt("Вася")
let int1 = parseInt('3.14'); //3
console.log(int1);
let int2 = parseInt('-7.875'); //-7
console.log(int2);
let int3 = parseInt('435'); //435
console.log(int3);
let int4 = parseInt('Вася'); //NaN
console.log(int4);

//task12
// С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
//     let str = prompt("Enter something", "ho-ho")
//     console.log(str);
let string = prompt('Enter somethung', 'ho-ho');
console.log(string);

//task13
//С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел,
// а вывод результата при помощи метода alert
let ent1 = +prompt('Enter number1', '10');
let ent2 = +prompt('Enter number2', '40');
alert(ent1 + ent2);

//task14
//С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
let name1 = prompt('What is your name', 'Іван');
let surname1 = prompt('What is your surname', 'Iванов');
let age = parseInt(prompt('Enter your age', '32'));
let result = (`Доброго вечера ${name1} ${surname1}, мои подзравления что вам ${age}`);
alert(result);