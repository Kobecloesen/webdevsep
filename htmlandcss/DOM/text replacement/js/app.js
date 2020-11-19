var todoForm = document.querySelector('#todo-form');
var addTodoBtn = document.querySelector('button.btn.btn-danger'); // old button

/*var newElement = document.createElement('button') //new button
newElement.innerText="New add todo Button" // button name 
newElement.className="btn btn-warning text-dark"
newElement.setAttribute('type','submit')

todoForm.replaceChild(newElement,addTodoBtn)*/


// click on a close button to hide the current item

var close = document.getElementsByClassName("delete-item");
var i;
for (i=0; i < close.length; i++) {
    close[i].onclick = function() {
                
    }
}
// create a new list item when clicking on "add" button




//console.log(close)