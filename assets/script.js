// Array untuk menyimpan tugas berdasarkan hari
const task = [];

// untuk mengedit task
let modeEdit = false;

// index dari produk yang kita edit 
let indexTask = null;
// ===============================================================
//                  Function Save Task
// ================================================================

// menyimpan data Task
function saveTask() {
  const inputTask = document.getElementById("input").value;
  const inputDay = document.getElementById("day-Selection").value;
  const inputTimer = document.getElementById("Date-input").value;
  const inputDate = document.getElementById("Time-input").value;

  const submit = confirm("Apakah anda yakin ingin menyimpan Task ini?");
  if (!submit) return;

  if (modeEdit) {
    task[indexTask] = {
      inputTask,
      inputDay,
      inputTimer,
      inputDate,
    };

    modeEdit = false;
    indexTask = null;
  } else {
    // Menyimpan Task ke dalam data Array
    task.push({
      inputTask,
      inputDay,
      inputTimer,
      inputDate,
    });
  }

  console.log(task);
  tampiltable();
  clearInput();
}

// ===============================================================
//                  Function Delete Task
// ================================================================

function taskDelete(index) {

  var confirmDelete = confirm("Apakah Anda yakin ingin menghapus Task ini?");
  if (!confirmDelete) return;

  task.splice(index, 1);
  tampiltable();
}

// ===============================================================
//                  Function Edit
// ================================================================

function editTask(index) {

  var Edit = confirm("Apakah Anda yakin ingin Merubah Task ini?");
  if (!Edit) return;

    document.getElementById("input");
    document.getElementById("Date-input");
    document.getElementById("time-input");
    document.getElementById("Day-Selection");

  
    modeEdit = true;
  
    indexTask = index;
  
  }

// ===============================================================
//                  Menampilkan table
// ================================================================

function tampiltable(tableTask = task) {
  const tBody = document.getElementById("t-body");

  tBody.innerHTML = "";

  tableTask.forEach((Task, index) => {
    var table = tBody.insertRow();

    if (Task.done) {
      table.classList.add('done');
    }

    table.innerHTML = `
      <td>${Task.inputDay}</td>
      <td>${Task.inputTimer}</td>
      <td>${Task.inputDate}</td>
      <td>${Task.inputTask}</td>
      <td>
        <button onclick="editTask(${index})">Edit</button>  
        <button onclick="taskDelete(${index})">Delete</button>
        <button onclick="taskDone(${index})">Done</button>
      </td>
    `;
  });

}

// ===============================================================
//                        function search
// ===============================================================

document.getElementById("search-input").addEventListener("input", (e) => {
  searchTask(e.target.value);
});

function searchTask(search) {
  var filterTask = task.filter( t => 
    t.inputTask.toLowerCase().includes(search.toLowerCase()) ||
    t.inputDay.toLowerCase().includes(search.toLowerCase()) ||
    t.inputTimer.toLowerCase().includes(search.toLowerCase()) ||
    t.inputDate.toLowerCase().includes(search.toLowerCase())
  );

  
  
  console.log(filterTask);
  tampiltable(filterTask);
}




// ===============================================================
//                  Button Selesai
// ===============================================================

function taskDone(index) {

  task[index].done = true;
  tampiltable();
}


// ===============================================================
//                  Function Select
// ===============================================================


  








// ===============================================================
//     untuk membersihkan input ketika sehabis di submit
// ===============================================================

function clearInput() {
  document.getElementById("input").value = "";
  document.getElementById("day-Selection").value = "";
  document.getElementById("Date-input").value = "";
  document.getElementById("Time-input").value = "";
}

// ===============================================================
//  untuk Load Data kita yang ada di localstorage
// ================================================================

