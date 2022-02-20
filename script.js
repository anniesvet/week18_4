// Сохранение первой заметки

note.value = localStorage.getItem('note');
note.oninput = () => {
localStorage.setItem('note', note.value)
};

function checkValidity() {
    if(note.validity.valueMissing) {
        alert('А где твоя заметка?');
    }
}