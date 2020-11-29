//         // 1. - Дана textarea.
//         //   В неё вводится текст.
//         //   Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
//
// let text = document.getElementById('textarea');
// text.value = localStorage.getItem('text');
// text.oninput = (ev) => {
//   localStorage.setItem('text',ev.target.value);
// };
//
// const form = document.getElementById('form');
//
//
//         // 2. - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//         //   Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
//         // Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//         //   Сделайте ваш скрипт как можно более универсальным.
//
// const form1 = document.getElementById('form1');
// getDataForm(form1);
// function save (t) {
//   setDataForm(t);
//
// }
// function setDataForm(tag) {
// for (let i = 0; i < tag.length; i++) {
//   let tagElement = tag[i];
//   console.log(tagElement);
//   if (tagElement.type === 'checkbox' || tagElement.type === 'radio')
//     tagElement.checked
//   ? tagElement.value = true
//       :tagElement.value = false
//   localStorage.setItem(tagElement.id, tagElement.value);
// }
// function getDataForm(tag) {
//   for (let i = 0; i < localStorage.length; i++) {
//     if(localStorage.hasOwnProperty(tag.children[i].id)) {
//       tag.children[i].value = localStorage.getItem(tag.children[i].id);
//       if (tag.children[i].value === 'true')
//         tag.children[i].setAttribute('checked', 'checked');
//     }
//   }
// }
// }
//
//         // 3. -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
//         // Требование : хранить историю своих изменений (даже после перезагрузки страницы).
//         // Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
// let back = document.getElementById('back');
// let next = document.getElementById('next');
// let text3 = document.getElementById('text3');
// let save3 = document.getElementById('save3');
//
// save3.onclick = () => {
// localStorage.setItem(localStorage.length+1, text3.value)
// }
//
// left.onclick = () => {
// let index;
// for (let key in localStorage) {
// if (localStorage.hasOwnProperty(key)) {
//   if (localStorage.getItem(key) === text3.value) {
// index = key;
//   }
// }
// }
// text3.value = localStorage.getItem(index-1);
// }
//
