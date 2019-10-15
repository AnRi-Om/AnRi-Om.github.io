document.getElementById('arrest01').addEventListener("click", function() {
	document.getElementById('popup01').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
	document.getElementById('popup01').style.display = "none";
	document.getElementById('tel').value = "";
});

document.getElementById('arrest02').addEventListener("click", function() {
	document.getElementById('popup01').style.display = "flex";
});