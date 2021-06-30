this.contador = 0;
document.getElementById('btn_add').addEventListener('click', () => {
    this.title = document.querySelector('.input_title_desc').value;
    this.description = document.querySelector('.input_description').value;
    this.action = document.querySelector('#action_select').value;

    let task = {
    title,
    description,
    action
    };
    if (localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    getTasks();
});

function getTasks() {
    this.tasks = JSON.parse(localStorage.getItem('tasks'));
    this.tasksWindow = document.getElementById('task_list');
    tasksWindow.innerHTML = '';
    for (let i = 0; i < tasks.length; i += 1) {
    
    this.title = tasks[i].title;
    this.description = tasks[i].description;
    this.action = tasks[i].action;

    switch (action) {
        case 'SHOPPING🛒':
        selectOpt = 0;
        break;
        case 'HOMEWORK👨‍🎓':
        selectOpt = 1;
        break;
        case 'SCHOOL📐':
        selectOpt = 2;
        break;
    }

    this.classLi = ['list_shopping list_dsp_none', 'list_homework list_dsp_none', 'list_school list_dsp_none'];
    this.context = `<div class="col_md_1_list" id="task-line-action">
        <p>${action}</p>
    </div>
    <div class="col_md_2_list" id="task-line">
        <h4> ${title} </h4>
        <p> ${description} </p>
    </div>
    <div class="col_md_3_list">
        <div class="cont_text_date"> </div>
        <input type="checkbox" class="check-deconste" id="checkboxChoose">
        <div class="cont_btns_options">
        <li>
            <a href="#finish" onclick="finishAct(${selectOpt}, ${contador});" >
                <p>❌</p>
            </a>
        </li>
        </div>
    </div>`;

    this.li = document.createElement('li');
    li.className = `${classLi[selectOpt]} li_num_${contador}`;
    li.innerHTML = this.context;
    document.querySelectorAll('.cont_princ_lists > ul')[0].appendChild(li);
    checked(tasks[i]);
    }
    function checked() {
    const check = document.getElementById('checkboxChoose');
    const task = document.getElementById('task-line');
    const taskAct = document.getElementById('task-line-action');
    check.addEventListener('click', () => {
        if (check.checked === true) {
        task.style.textDecoration = "line-through";
        task.style.color = "#888";
        taskAct.style.textDecoration = "line-through";
        taskAct.style.color = "#888";
        } else {
        task.style.textDecoration = "";
        task.style.color = "";
        taskAct.style.textDecoration = "";
        taskAct.style.color = "";
        }
    });
    }

}

function displayBlock() {
    document.querySelector(`.li_num_${contador}`).style.display = 'block';
}

function countSum() {
    document.querySelector(`.li_num_${contador}`).className = `list_dsp_true ${classLi[selectOpt]} li_num_${contador}`;
    contador += 1;
}

// delete local storage
function deleteTask(title) {
    let deleteTasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < deleteTasks.length; i++) {
    if (deleteTasks[i].title == title) {
        deleteTasks.splice(i, 1);
    }
    }
    localStorage.setItem('deleteTasks', JSON.stringify(deleteTask));
    finishAct();
    getTasks();
    delFinish();
}

function finishAct(num, num2) {
    const classLi = ['list_shopping list_dsp_none', 'list_homework list_dsp_none', 'list_school list_dsp_none'];
    document.querySelector(`.li_num_${num2}`).className = `${classLi[num]} list_finish_state`;
    delFinish();

}

function delFinish() {
    const li = document.querySelectorAll('.list_finish_state');
    for (let e = 0; e < li.length; e += 1) {
    li[e].style.opacity = '0';
    li[e].style.display = 'block';
    }

    function setOrder() {
    const li = document.querySelectorAll('.list_finish_state');
    for (let e = 0; e < li.length; e += 1) {
        li[e].parentNode.removeChild(li[e]);
    }
    }
    setOrder();

}

const deleteAll = document.getElementById('btn_delete')

deleteAll.addEventListener('click', () => {
    const taskList = document.querySelectorAll(' .check-deconste input[type=checkbox]')
    for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].checked === true) {
        const allTask = taskList[i].parentElement;
        allTask.remove();
    }
    console.log(allTask);
    }
});


//edit
function editTasks(event) {
    const editTitle = event.querySelector('.input_title_desc input[type=text]');
    const editDescription = event.querySelector('.titl_description input[type=text]');
    const editAction = event.querySelectorAll('#action_select')
    const taskAgo = event.querySelectorAll('edit');
    if (taskAgo) {
    input.innerText = editTitle.value;
    input.innerText = editDescription.value;
    select.innerText = editAction.value;
    } else {
    editTitle.value = input.innerText;
    editDescription.value = input.innerText;
    editAction.value = select.innerText;
    
    }
    event.classList.toggle('edit');
}

const task_List = document.getElementById('task_list')

task_List.addEventListener('click', (event) => {
    const oneTask = event.target.parentElement.parentElement;
    if (event.querySelectorAll === 'edit') {
    if (event.target.parentElement.querySelectorAll('edit')) {
        editTask(oneTask);
    } else {
        oneTask.remove();
    }
    }
});

getTasks();
