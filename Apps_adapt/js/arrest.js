let popupToggle01 = document.getElementById('arrest01'),
	popupToggle02 = document.getElementById('arrest02'),
	popupToggle03 = document.getElementById('arrest03'),
	popupToggle04 = document.getElementById('arrest04'),
	popupToggle05 = document.getElementById('arrest05'),
	popup = document.getElementById('popup01'),
	popupClose = document.querySelector('.popup .close'),
	formTell = document.getElementById('tel'),
	tabToggle01 = document.getElementById('arrest06'),
	tab = document.querySelector('#tabArrest'),
	tabClose = document.querySelector('.tab .close');

popupToggle01.onclick = function() {
	popup.style.display = "flex";
};

popupToggle02.onclick = function() {
	popup.style.display = "flex";
};

popupToggle03.onclick = function() {
	popup.style.display = "flex";
};

popupToggle04.onclick = function() {
	popup.style.display = "flex";
};

popupToggle05.onclick = function() {
	popup.style.display = "flex";
};

popupClose.onclick = function() {
	popup.style.display = "none";
	formTell.value = "";
};

window.onclick = function (e) {
	if(e.target == popup) {
	popup.style.display = "none";
	}
}

tabToggle01.onclick = function() {
	tab.style.display = "flex";
};

tabClose.onclick = function() {
	tab.style.display = "none";
};

window.onclick = function (e) {
	if(e.target == tab) {
	tab.style.display = "none";
	}
}