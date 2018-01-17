var num = 40; 
var text = document.querySelector('.message');
var count = document.querySelector('.count');
text.addEventListener('keydown', enterText, false);
text.addEventListener('keydown', backSpace, false);

var arr = ['9','13','16','17','18','19','20','27','33','34','35','36','37','38','39','40','45','46','91','92','112','113','114','115','116','117','118','119','120','121','122','123','144','145','154','157'];

// словим когда нужно выключить событие
var checed = false;

function enterText(event){
	// console.log(event.keyCode);
// Чтобы счетчик не учитывал не нужные клавиши(ctrl, tab);
	for (var i = 0; i < arr.length; i++) {
		if(event.keyCode == arr[i]){
			console.log('error');
			count.innerHTML = (num - text.value.length) + 1;
		}
	}
	
// удаление текста - первая проверка (учитываем чтобы счетчик неушел в минус)
	if( event.keyCode == 8 ){
		
		count.innerHTML++;
		checed = true;
		if( count.innerHTML > num ){
			count.innerHTML = num;
		}
	}
// добавление текст = удаление в счетчике
	else if( text.value.length < num ){
		count.innerHTML--;
		checed = true;
	}
//  Включаем на каком этапе останавить счетчик (обнуляем содержимое счетчика)
	else{
		count.innerHTML = 0;
		checed = false;
	}
}

function backSpace(event){
	if( checed == false ){
//останавливаем событие (приравниваем счетчик к 0 чтоб небыло минуса)
		event.preventDefault();
	}
}

// ================
// Событие на кнопку твитнуть очистит инпут и счетчики

var bottomTwit = document.querySelector('.bottom');
bottomTwit.addEventListener('click', TwitGo, false);

function TwitGo(event){
	if(checed == false || checed == true){
		count.innerHTML = num;
		text.value.length = 0;
		text.value = '';
		// console.log('clear');
	}
}