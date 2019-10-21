let btnTab01 = document.getElementById('tab01'),
	btnTab02 = document.getElementById('tab02'),
	lineBtn01 = document.getElementById('linebtn01'),
	lineBtn02 = document.getElementById('linebtn02'),
	tabContent01 = document.querySelector('.tabpanel .num1'),
	tabContent02 = document.querySelector('.tabpanel .num2');


btnTab01.onclick = function() {
	btnTab01.style.background = "#f6f6f6";
	linebtn01.style.display = "none";
	tabContent01.style.display = "flex";

	btnTab02.style.background = "#fff";
	linebtn02.style.display = "block";
	tabContent02.style.display = "none";
};
btnTab02.onclick = function() {
	btnTab02.style.background = "#f6f6f6";
	linebtn02.style.display = "none";
	tabContent02.style.display = "flex";

	btnTab01.style.background = "#fff";
	linebtn01.style.display = "block";
	tabContent01.style.display = "none";
};