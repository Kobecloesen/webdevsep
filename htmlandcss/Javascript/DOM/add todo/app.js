let todoInput = document.querySelector('#todo');
let addTodoBtn = document.querySelector('button.btn.btn-danger'); // old button
let todoForm = document.querySelector('#todo-form')
let ListofTodos = document.querySelector('.list-group')
let Output;
var filter = (document.querySelector('#filter').value)


Output = todoInput.classList
Output = todoInput.placeholder;
Output = todoInput.getAttribute('placeholder')
Output = todoInput.getAttribute('company');
todoInput.setAttribute('attrName', 'AttributeValue')
todoInput.removeAttribute('attrName')
Output = addTodoBtn;
let todoArray;
addTodoBtn.className = "btn btn-primary"

function createHTML(tagname) {
    return document.createElement(tagname)
}

var div = createHTML('div')

div.className = "container"
console.log(div)

function addTodoToArray(todo) {

    if (todoArray === null || todoArray === undefined) {
        todoArray = []; // init array
        console.log('array initialized')
        todoArray.push(todo)
    } else {
        todoArray.push(todo)
    }

    console.log(todoArray)

}

function addTodo(event) {
    event.preventDefault();
    var li = document.createElement('li')
    var title = document.createTextNode(todoInput.value)
    li.className = "list-group-item d-flex justify-content-between"
    var a = document.createElement('a')
    a.href = "#"
    a.className = "delete-item"
    var i = document.createElement('i')
    i.className = "fa fa-remove"
    a.appendChild(i)
    li.appendChild(title)
    li.appendChild(a)
    ListofTodos.appendChild(li)
    console.log(todoInput.value)
    addTodoToArray(todoInput.value)
    
}

addTodoBtn.addEventListener('click', addTodo)

while (document.querySelector('#filter').value === document.querySelectorAll('#list-group-item').value){
    document.querySelectorAll('#list-group-item').style.backgroundcolor='yellow';
}

//document.querySelectorAll('#list-group-item').style.backgroundcolor='yellow';



console.log(todoInput)
console.log(Output)
console.log(filter)