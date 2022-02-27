let list = document.querySelector('.list');
let addBtn = document.querySelector(".addBtn");
let clearBtn = document.querySelector('.clearBtn');
let noteInput = document.querySelector('.note');
let itemsArray = [];

document.addEventListener("DOMContentLoaded", function(event) {
    let notes = localStorage.getItem("notes");
    if(notes !== null) {
        document.querySelector('.list').innerHTML = notes;
    }
});


function addNote() {

    let note = noteInput.value;

    if (note.length === 0) return;

    itemsArray.push(note);

    localStorage.setItem('notes', itemsArray);

    showNote(note);

    noteInput.value = "";
}

function showNote(note) {
    document.querySelector('.list').innerHTML = itemsArray.join(", <br>");
}

function clearNotes() {
    list.innerHTML = "";
    localStorage.removeItem('notes');
    itemsArray = [];
}

addBtn.addEventListener("click", addNote);
clearBtn.addEventListener("click", clearNotes);

