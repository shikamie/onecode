function addTask() {
	var task = document.getElementById("task").value; // Принимаем инпут от пользователя
if (task.trim() === "") {
	  alert("Пожалуйста, введите задачу, прежде чем добавлять ее в список.");
	  return;
	}
	var list = document.getElementById("list"); // Находим лист по айди, для последующего использования в коде
	var newItem = document.createElement("li"); // создаем новый элемент html li	
	newItem.innerHTML = task + " "; // пихаем в список содержание инпута
var deleteBtn = document.createElement("button"); // Создаём кнопку удаления элемента из списка
	deleteBtn.innerHTML = "Delete"; // Вставляем текст в кнопку
	deleteBtn.onclick = function() {
	  list.removeChild(newItem); // Создали функцию, которая удаляет текущую задачу в туду
	}
	newItem.appendChild(deleteBtn); // кидаем в жлемент списка кнопку
	list.appendChild(newItem); // помещаем в новый элемент
	
	document.getElementById('task').value = "";
	
 }