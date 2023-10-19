const button = document.querySelector('.input-container button');
const input = document.querySelector('.input-container input');
const list = document.querySelector('.todo-list');

button.addEventListener("click", () => {
    const li = document.createElement("li");//створюємо змінну з классом для зміни наповнення виведного
    li.className = "todo-list-item";
    li.innerText = input.value;//Наповнення що пишемо строку надається до таблиці
    const deleteBtn = document.createElement("button"); // створюємо змінну для кнопки, та саму її
    deleteBtn.innerText = "Delete"; //Сама кнопка з текстом всередині
    li.appendChild(deleteBtn);
    list.appendChild(li);
    input.value = "";

    deleteBtn.addEventListener('click', () => {
        list.removeChild(li);
    })
}) 