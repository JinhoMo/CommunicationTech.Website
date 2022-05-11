let target = 100;
let progress = 450 - 450 * target * 0.01;
let time = 0.002 * target ** 2 + -0.51 * target + 36.25;

const prog = document.querySelector(":root");
prog.style.setProperty("--element-progress", progress);

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
	if (counter == target) {
		clearInterval();
	} else {
		counter += 1;
		if (counter == 100) {
			document.querySelector(":root").style.setProperty("--element-left", "8px");
		}
		number.innerHTML = counter + "%";
	}
}, time);
