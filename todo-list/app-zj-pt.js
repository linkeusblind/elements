const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoContainer = document.querySelector('.todo-container');
const filterOption = document.querySelector('.filter-todo');



document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);

function addTodo(event) {
    event.preventDefault();
    if (todoInput.value === '') {

    } else {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        saveLocalTodos(todoInput.value);

        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
        todoInput.value = "";
    }

}

function deleteCheck(e) {
    const item = e.target;

    const todo = item.parentElement;
    const todoText = todo.innerText;

    todo.classList.toggle('completed');

    completed = todo.classList.contains('completed');



    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);


        localStorage.removeItem(todoText);


        todo.addEventListener('transitionend', function () {
            todo.remove();
        })
    }

    if (item.classList[0] === 'complete-btn' || item.classList[0] === 'todo-item') {

        if (completed === true) {
            localStorage.setItem('zjPt' + todoText, JSON.stringify(todoText));

        } else {
            localStorage.removeItem('zjPt' + todoText, todoText);
        }
    }

    todoList.classList.remove('completed');
    todoContainer.classList.remove('completed');


}



function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });

}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todosZjPt') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todosZjPt'));
    }
    todos.push(todo);
    localStorage.setItem('todosZjPt', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todosZjPt') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todosZjPt'));
    }
    todos.forEach(function (todo) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //zmienna w której jest tekst z todo
        const todoText = newTodo.innerText;
        const localItem = localStorage.getItem('zjPt' + todoText);
        let itemslice = localItem;
        if (localItem != null) {
            itemslice = localItem.slice(1, -1);
        }



        if (todoText == itemslice) {
            todoDiv.classList.add('completed');
        }


        //koniec completed
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        todoList.appendChild(todoDiv);
    });

}

function removeLocalTodos(todo) {
    const todoText = todo.innerText;
    if (completed === true) {
    } else {
        localStorage.removeItem('zjPt' + todoText, todoText);
    }
    let todos;
    if (localStorage.getItem('todosZjPt') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todosZjPt'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todosZjPt', JSON.stringify(todos));
}

/* PLUGINS */
function backToTop() {
    $('#backToTop').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100)
            $('#backToTop').fadeIn();
        else
            $('#backToTop').fadeOut();
    });
    $('#backToTop a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
}
//speak feauture
const speakBtn = document.querySelector('.speakBtn');


const content = document.querySelector('.todo-input');





const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'pl-PL';

recognition.onstart = function() {
    console.log('voice is activated, you can speak to microphone');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    todoInput.value = transcript;

};

speakBtn.addEventListener('click', () => {
    recognition.start();
});