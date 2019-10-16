let popupToggle01 = document.getElementById('arrest01'),
	popupToggle02 = document.getElementById('arrest02'),
	popupToggle03 = document.getElementById('arrest03'),
	popupToggle04 = document.getElementById('arrest04'),
	popupToggle05 = document.getElementById('arrest05'),
	popup = document.getElementById('popup01'),
	popupClose = document.querySelector('.close'),
	formTell = document.getElementById('tel');

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