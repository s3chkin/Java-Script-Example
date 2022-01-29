function addItem()
{
	//1)Прочитаме стойностите от двете input полета;
	var text = document.querySelector('#newItemText').value;
	var value = document.querySelector('#newItemValue').value;
    	
	//2)Създаваме нов елемнт към падащото меню и
	//задаваме стойности за този елемент;
	 var optionElement = document.createElement('option');
	optionElement.value = value;
	optionElement.textContent = text;
	document.querySelector('#menu').appendChild(optionElement);
	
	//3)Зануляваме двете input полета;
	// document.querySelector('#newItemText').value = " ";
	document.querySelector('#newItemValue').value = " ";
}