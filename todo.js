const toDoInput = document.querySelector('.todo-input');
const toDoDesc = document.querySelector('.todo-description');
const toDoBtn = document.querySelector('.todo-btn');
const toDoList = document.querySelector('.todo-list');

// Add

toDoBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click',deletedrop);

function addToDo(event) {
    event.preventDefault();
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add('todo');
    const newToDo = document.createElement('li');
    if (toDoInput.value === '') {
        alert("You must write something!");
    }
    else {
        // newToDo.innerText = "hey";
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add('todo-item');
        toDoDiv.appendChild(newToDo);
           

        // delete btn;
        const deleted = document.createElement('button');
        deleted.innerHTML = '<i class="fas fa-trash"></i>';
        deleted.classList.add('delete-btn');
        toDoDiv.appendChild(deleted);

        // drop btn;
        // const checked = document.createElement('button');
        // checked.innerHTML = '<i class="fa-solid fa-bars"></i>';
        // checked.classList.add('drop-btn');
        // toDoDiv.appendChild(checked);

        // Append to list;
        toDoList.appendChild(toDoDiv);

        // CLearing the input;
        toDoInput.value = '';
    }

}   
function deletedrop(event){
    // console.log(event.target);
    // event.preventDefault();
    const item = event.target;

    // delete
    if(item.classList[0] === 'delete-btn')
    {
        // item.parentElement.remove();
        // animation
        item.parentElement.classList.add("fall");
    
        item.parentElement.addEventListener('transitionend', function(){
            item.parentElement.remove();
        })
    }

    // check
    if(item.classList[0] === 'drop-btn')
    {
        // item.parentElement.classList.toggle("completed");

    }


}
