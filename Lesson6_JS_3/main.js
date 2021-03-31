//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
const elementId = document.getElementById('main_header');
elementId.style.color = '#3fc30e'
elementId.innerText = 'February-2021'

//     b) робить шириниу елементу ul 400px
const elementsUl = document.getElementsByTagName('ul');
for (let i = 0; i < elementsUl.length; i++) {
    elementsUl[i].style.width = '400px';
}

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
const elementLinkList = document.getElementsByClassName('linkList');
for (let i = 0; i < elementLinkList.length; i++) {
    elementLinkList[i].style.width = '50%';
}

//     d) отримує текст який зберігається в елементі з класом listElement2
const listElement2 = document.getElementsByClassName('listElement2');
for (let i = 0; i < listElement2.length; i++) {
    console.log(listElement2[i].textContent);
}

//     e) отримує всі елементи li та змінює ім колір фону на сірий
const elementLi = document.getElementsByTagName('li');
for (let i = 0; i < elementLi.length; i++) {
    elementLi[i].style.backgroundColor = 'silver';
}

//     f) отримує всі елементи 'a' та додає їм клас anchor
const elementA = document.getElementsByTagName('a');
for (let i = 0; i < elementA.length; i++) {
    elementA[i].classList.add('anchor');
}

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
const elementAnchor = document.getElementsByTagName('a');
for (let i = 0; i < elementAnchor.length; i++) {
    elementAnchor[2].style.fontSize = '40px';
}

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
const xxx = document.getElementsByTagName('a');
for (let i = 0; i < xxx.length; i++) {
    xxx[i].classList.add('element_XXX');
}

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const elementsh3 = document.getElementsByClassName('sub-header');
let enterColor = prompt('Enter color');
for (let i = 0; i < elementsh3.length; i++) {
    elementsh3[i].style.backgroundColor = `${enterColor}`;
}

//     j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
const colorH3 = document.getElementsByClassName('sub-header');
let colorHeader3 = prompt('Enter color for text')
for (let i = 1; i < colorH3.length; i++) {
    colorH3[i].innetText = 'content 2 segment'
    colorH3[i].style.color = `${colorHeader3}`
}

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
const text = document.getElementsByClassName('content_1');
let randomText = prompt('Enter something');
for (let i = 0; i < text.length; i++) {
    text[i].innerText = `${randomText}`;
}

//     l) отримати елементи p та змінити їм padding на 20px
const padding20 = document.getElementsByTagName('p');
for (let i = 0; i < padding20.length; i++) {
    padding20[i].style.padding = '20px';
}

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
const classText2 = document.getElementsByClassName('text2');
for (let i = 0; i < classText2.length; i++) {
    classText2[i].innerText = 'February-2021';
}

// Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

for (let i = 0; i < rules.length; i++) {
    let rulesDiv = document.createElement('div');
    rulesDiv.innerText = `${rules[i].title}
    ${rules[i].body}`;
    document.body.appendChild(rulesDiv);
}

// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
let cloneID = usersWithId.slice()
for (let user of cloneID) {
    for (let city of citiesWithId) {
        if (user.id === city.user_id) {
            user.address = city
        }
    }
}
console.log(cloneID);

