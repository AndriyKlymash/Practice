// task1
//Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr = ['a', 'b', 'c'];
for (let i = 1; i < 4; i++) {
    arr.push(i);
}
console.log(arr)

// task2
//Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let arrNumber = [1, 2, 3];
let newArrNumber = [];
for (let i = 2; i >= 0; i--) {
    newArrNumber.push(arrNumber[i]);
}
console.log(newArrNumber)

//task3
//Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let arrNumb = [1, 2, 3];
for (let i = 4; i < 7; i++) {
    arrNumb.push(i);
}
console.log(arrNumb);
//task4
//Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let array = [1, 2, 3];
for (let i = 6; i > 3; i--) {
    array.unshift(i);
}
console.log(array);

//task5
//Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
let arrString = ['js', 'css', 'jq'];
console.log(arrString);
arrString.reverse();
for (let i = 0; i < 2; i++) {
    arrString.shift();
}
console.log(arrString);


//task6
//Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let arrString1 = ['js', 'css', 'jq'];
console.log(arrString1);
arrString1.reverse();
for (let i = 0; i < 2; i++) {
    arrString1.pop();
}
console.log(arrString1);

//task7
//Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let arrNumber4 = [1, 2, 3, 4, 5];
console.log(arrNumber4.slice(3))

//Інший спосіб
let arrNumber3 = [1, 2, 3, 4, 5]
for (let i = 0; i < 3; i++) {
    arrNumber3.shift();
}
console.log(arrNumber3);


//task8
//Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
let arrNumber2 = [1, 2, 3, 4, 5];
console.log(arrNumber2.slice(0, 2));

//Інший спосіб
let arrNumber6 = [1, 2, 3, 4, 5]
for (let i = 2; i < 5; i++) {
    arrNumber6.pop();
}
console.log(arrNumber6);


//task9
//Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let numbArr = [1, 2, 3, 4, 5];
numbArr.splice(3, 0, 'a', 'b', 'c');
console.log(numbArr);

//task10
//Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let numbArr1 = [1, 2, 3, 4, 5];
numbArr1.splice(1, 0, 'a', 'b');
numbArr1.splice(6, 0, 'c');
numbArr1.splice(8, 0, 'e')
console.log(numbArr1);
//task11
//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arrNumber10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i < 10; i += 2) {
    console.log(arrNumber10[i])
}

//task12
//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let emptyArr = [];
for (let i = 0; i < 10; i++) {
    emptyArr.push(arrNumber10[i])
}
console.log(emptyArr);

//task13
//Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let numberArr10 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let emptyArr1 = [];
for (let i = 0; i < 10; i++) {
    emptyArr1[i] = numberArr10[i]
}
console.log(emptyArr1)

//task14зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
let arrays = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < 10) {
    console.log(arrays[i]);
    i++;
}

// 2. перебрати його циклом for
for (let array of arrays) {
    console.log(array)
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let j = 0;
while (j < 10) {
    if (j += 1) {
        console.log(arrays[j]);
    }
    j++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0; i < 10; i++) {
    if (i += 1) {
        console.log(arrays[i]);
    }
}

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let k = 1;
while (k < 10) {
    if (k += 1) {
        console.log(arrays[k]);
    }
    k++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let l = 1; l < arrays.length; l++) {
    if (l += 1) {
        console.log(arrays[l]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
console.log(arrays);
for (let l = 0; l < arrays.length; l++) {
    if (arrays[l] % 3 === 0) {
        arrays[l] = 'okten'
    }
}
console.log(arrays)

// 8. вивести масив в зворотньому порядку.
let arrays2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (let l = arrays2.length - 1; l >= 0; l--) {
    console.log(arrays2[l]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 9.3
//перебрати циклом while та вивести  числа тільки з непарним індексом (із кінця до початку)
let arr3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let h = arr3.length - 1;
while (h >= 0) {
    if (h % 2 === 1) {
        console.log(arr3[h]);
    }
    h--;
}


// 9.4 перебрати циклом for та вивести  числа тільки з непарним індексом (із кінця до початку)
console.log(arrays2);
for (let i = 10; i >= 0; i--) {
    if (i -= 1) {
        console.log(arrays2[i]);
    }
}

//9.5
//перебрати циклом while та вивести  числа тільки з парним індексом (із кінця до початку)
let arr4 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let f = 10;
while (f--) {
    if (f--) {
        console.log(arr4[f]);
    }
}
//9.6
//перебрати циклом for та вивести  числа тільки парні  значення (із кінця до початку)
console.log(arr4);
for (let l = arr4.length - 1; l >= 0; l--) {
    if (l--) {
        console.log(arr4[l]);
    }
}

//9.7
//замінити кожне число кратне 3 на слово "okten"(у зворотньому цилкі)
console.log(arrays);
for (let l = arrays.length - 1; l >= 0; l--) {
    if (arrays[l] % 3 === 0) {
        arrays[l] = 'okten'
    }
    console.log(arrays[l]);
}

//task15
//створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
let emptyArray = [];
for (let l = 0; l < 51; l++) {
    if (l % 2 === 0) {
        emptyArray[l] = l;
    }
}
console.log(emptyArray);

// - заповнити його 50 непарними числами за допомоги циклу.
let emptyArray1 = [];
for (let l = 0; l < 51; l++) {
    if (l % 2 === 1) {
        emptyArray1[l] = l;
    }
}
console.log(emptyArray1);

// task16
//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
let emptyArr3 = [];
let emptyArr4 = [];
for (let l = 0; l < 51; l++) {
    if (l % 2 === 0) {
        emptyArr3[l] = l;
    } else {
        emptyArr4[l] = l;
    }
}
console.log(emptyArr3);
console.log(emptyArr4);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arrRandomNumber = [];
for (let l = 0; l < 10; l++) {
    arrRandomNumber[l] = Math.random();
}
console.log(arrRandomNumber);

//    d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arrRandomNumber1 = [];
for (let k = 0; k < 20; k++) {
    arrRandomNumber1[k] = Math.floor(Math.random() * (732 - 8)) + 8;
}
console.log(arrRandomNumber1);

//Вивести за допомогою console.log кожен третій елемен
for (let l = 2; l < arrRandomNumber1.length; l += 3) {
    console.log(arrRandomNumber1[l])
}

//Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let l = 2; l < arrRandomNumber1.length; l += 3) {
    if (arrRandomNumber1[l] % 2 === 0) {
        console.log(arrRandomNumber1[l])
    }
}

//Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
let arrRandom = [1, 2, 3, 5, 7, 9, 56, 8, 67];
for (let l = 0; l < arrRandom.length; l++) {
    if (arrRandom[l + 1] % 2 === 0) {
        console.log(arrRandom[l]);
    }
}
//Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let arrRandom1 = [100,250,50,168,120,345,188];
for (let l = 0; l < arrRandom1.length; l++) {
     arrArifmetic= arrRandom1[l+=l];
}
console.log(arrArifmetic/7);

//Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arrRandomNumber2 = [];
for (let k = 0; k < 10; k++) {
    arrRandomNumber2[k] = Math.floor(Math.random() * (732 - 8)) + 8;
}
console.log(arrRandomNumber2);
let newArrRandom2=[];
for (let l = 0; l < arrRandomNumber2.length; l++) {
    newArrRandom2[l]=arrRandomNumber2[l]*5
}
console.log(newArrRandom2)

//Створити масив з будь якими значеннями (стрінги, числа, і тд...).
// пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr10 = ['Andriy', 20, 'Sasha', 24, 'Yuriy', 19];
let newArr10 = [];
for (let l = 0; l < arr10.length; l++) {
    if (typeof arr10[l]=== 'number'){
        newArr10[l]=arr10[l];
    }
}
console.log(newArr10);



//Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// // Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// // Улучшаем предыдущее задание.
// // Если светофор зеленый и машин нет - вывести "иди".
// // Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// // Если светофор желтый и машины есть - вывести "жди".
// // Если светофор желтый и машин нет - вывести "все рано жди".
// // Если светофор красный и машин нет- вывести "стой все рано".
// // Если светофор красный - и машины есть вывести "стой и жди".
// // Если светофор в аварийном режиме вывести "делай что хочешь"!

let color = prompt('Enter color traffic lights')
let isRoadClear = confirm('There are cars on the road?')
if (color === 'green' && isRoadClear === false) {
    console.log('GO')
} else if (color === 'green' && isRoadClear===true) {
 console.log('Wait until the cars pass')
} else if(color === 'yellow' && isRoadClear === false){
    console.log('Wait')
} else if(color === 'yellow' && isRoadClear === true){
  console.log('Wait, wait')
} else if(color==='red'&& isRoadClear === false){
    console.log('traffic light is red, wait')
} else if(color === 'red' && isRoadClear === true){
    console.log("Stop and wait")
} else {
    console.log('Do what you want the traffic lights doesen`t work')
}


