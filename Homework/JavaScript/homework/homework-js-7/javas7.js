      // 1. - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

let btn = document.getElementById("btn");
let text = document.getElementById("text");
btn.onclick = ev => {
  text.hidden
      ? text.hidden = false
       :text.hidden = true
};

      // 2. - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let self = document.getElementById("self");
self.onclick = s => {
  self.hidden = true
};

      // 3. - створити інпут який приймає вік людини та кнопку яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let age = document.getElementById("age");
let ok = document.getElementById("ok");
ok.onclick = ev => {
const value = age.value;
if (value < 18 && value> 0) {
  alert('EXIT')
}
if (value <=0) {
  alert('ERROR')
}
  else {
  alert('OK')
}
};

      // 4. - Создайте меню, которое раскрывается/сворачивается при клике

let menu = document.getElementById("menu");
let li = document.getElementById("menu2");
let click;
li.style.display = 'none'
menu.onclick  = ev => {
if (click) {
  li.style.display = 'none';
  click = false;
}else{
  li.style.display = 'block';
  click = true;
}
}

      // 5. - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
      //   Вывести список комментариев в документ, каждый в своем блоке.
      //   Добавьте каждому комментарию по кнопке для сворачивания его body.

let commentArr = [
  {title : 'Vasil', body:'lorem ipsum dolo sit ameti'},
  {title : 'Stephan', body:'lorem ipsum dolo sit ameti'},
  {title : 'Oksana', body:'lorem ipsum dolo sit ameti'},
  {title : 'Ira', body:'lorem ipsum dolo sit ameti'},
  {title : 'Taras', body:'lorem ipsum dolo sit ameti'},
  {title : 'Lida', body:'lorem ipsum dolo sit ameti'}
]

const coment = document.getElementById("coment");
commentArr.forEach(item =>{
  const div = document.createElement('div');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  const button = document.createElement('button');
  button.innerText = 'Close';
  h3.innerText = item.title;
  p.innerText = item.body;

  button.onclick = () => {
    p.hidden
    ?p.hidden = false
      :p.hidden = true
  }
  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(button);
  coment.appendChild(div)
});















