"use strict";

//-------------------------- HTML ELEMENT--------------------------
const toast = document.querySelector(".toast"),
  notif = document.querySelector("#notif"),
  submitform = document.querySelector("#submitform"),
  taskTitle = document.querySelector("#task"),
  doneTask = document.querySelector("#done"),
  progressTask = document.querySelector("#progres"),
  mainList = document.querySelector(".list"),
  delTask = document.querySelectorAll(".del"),
  editTask = document.querySelectorAll(".edit"),
  checkTask = document.querySelectorAll(".check");

//   ---------------------TASK LIST----------------------
let task = [
  //   {
  //     id: Date.now(),
  //     title: "Lorem ipsum sit amet",
  //     status: true,
  //   },
  //   {
  //     id: Date.now(),
  //     title: "Lorem ipsum sit amet lorem lorem",
  //     status: false,
  //   },
  //   {
  //     id: Date.now(),
  //     title: "goal goal goal",
  //     status: true,
  //   },
];

// -------------------------------dynamic task list rendering-------------------------

function renderTasklist(tasklist) {
  console.log(tasklist);
  if (tasklist.length) {
    tasklist.forEach((task) => {
      //   console.log(task);
      const taskItem = createElement(
        "li",
        "w-full p-3 flex justify-between shadow-lg rounded-md mb-3 bg-white list-item",
        `
            <p class="text-xl text-[#5A5A5A]">${task.title}</p>
                <div class="btn-group flex justify-between">
                  <i
                    data-del="${task.id}"
                    class="del bx bx-trash text-2xl text-red-600 active:text-red-800 mx-2 cursor-pointer"
                  ></i>
                  <i
                    data-del="${task.id}"
                    class="edit bx bx-edit text-2xl text-sky-600 active:text-sky-800 mx-2 cursor-pointer"
                  ></i>
                  <i
                    data-check="${task.id}"
                    class="check bx bx-check-circle text-2xl ${
                      task.status
                        ? "text-green-600 active:text-green-800"
                        : "text-black active:text-[#3a3a3a]"
                    } mx-2 cursor-pointer"
                  ></i>
                </div>
            `
      );
      mainList.append(taskItem);
    });
  } else {
    mainList.innerHTML =
      "<h2 class='textcenter text-xl text-red-500'>NOT FOUND !</h2>";
  }
}
renderTasklist(task);
// -------------------------------dynamic task list rendering end-------------------------

// ----------------count task done or ----------------------

function countTaskDone(tasklist) {
  const done = tasklist.filter((item) => item.status === true).length;
  const progress = tasklist.filter((item) => item.status === false).length;
  console.log(done, progress);
  doneTask.textContent = done;
  progressTask.textContent = progress;
}
countTaskDone(task);
// ----------------count task done or end ----------------------

// --------------------------add new task---------------------

function addNewTask() {
  const title = taskTitle.value;
  const newTask = {
    id: Date.now(),
    title: title,
    status: false,
  };
  const check = {
    title: newTask.title.trim().length === 0,
  };
  if (check.title) {
    alert("Please enter a title for this task !");
    // toast warning message
  } else {
    task.push(newTask);
    taskTitle.value = "";
    // toast warning message
  }
}
submitform,
  addEventListener("submit", (e) => {
    e.preventDefault();
    addNewTask();
    mainList.innerHTML = "";
    renderTasklist(task);
    countTaskDone(task);
  });

mainList.addEventListener("click", (e) => {
    mainList.innerHTML = "";
  if (e.target.classList.contains("del")) {
    const id = e.target.getAttribute("data-del");
    // const filterTask = task.filter((task) => task.id !== id);
    // console.log(filterTask);
    task = task.filter((task) => task.id != id);
    renderTasklist(task)
    countTaskDone(task);
  }
});
