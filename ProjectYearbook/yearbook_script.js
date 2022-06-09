// getting all required elements
const modeChanger = document.querySelector(".fixError");
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
const stateTag = document.querySelector(".wrapper").querySelector("h1");
let colourStyle = document.querySelector(":root");
let backgroundColor = getComputedStyle(colourStyle);
let stateMsg = stateTag.innerHTML;
let timeOut = 3;
let count = -1;
let timeout;

let mode = "standard";

modeChanger.addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		modeChanger.click();
	}
});

// if user press any key and release
inputBox.onkeyup = (e) => {
	let userData = e.target.value; //user enetered data
	let emptyArray = [];
	if (userData) {
		icon.onclick = () => {
			work(userData);
		};

		emptyArray = suggestions.filter((data) => {
			//filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
			return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
		});

		emptyArray = emptyArray.concat(defineInitial(userData));

		let subArray = [];

		for (let i = 0; i < emptyArray.length; i++) {
			if (subArray.includes(emptyArray[i])) continue;
			else subArray.push(emptyArray[i]);
		}

		emptyArray = subArray;

		emptyArray = emptyArray.map((data) => {
			// passing return data inside li tag
			return (data = `<li>${data}</li>`);
		});

		searchWrapper.classList.add("active"); //show autocomplete box
		showSuggestions(emptyArray);
		let allList = suggBox.querySelectorAll("li");
		let k = e.key;

		// interact of suggestion box with user key inputs.
		switch (k) {
			case "ArrowDown":
				count += 1;
				if (count >= allList.length) {
					count = allList.length - 1;
				}
				allList[count].classList.add("active");
				break;

			case "ArrowUp":
				count -= 1;
				if (count < -1) {
					count = -1;
				}
				try {
					allList[count].classList.add("active");
				} catch (err) {
					console.log("selected input");
				}
				break;

			case "Enter":
				if (count == -1) work(userData);
				else work(allList[count].innerHTML);
				break;
		}

		// if user input is empty space, disable autocomplete box
		if (!inputBox.value.trim()) {
			searchWrapper.classList.remove("active");
		}

		for (let i = 0; i < allList.length; i++) {
			//adding onclick attribute in all li tag
			allList[i].setAttribute("onclick", "select(this)");
		}
	} else {
		searchWrapper.classList.remove("active"); //hide autocomplete box
	}
};

function reset() {
	stateTag.innerHTML = stateMsg;
}

function work(data) {
	clearTimeout(timeout);
	inputBox.value = "";
	count = -1;
	stateTag.innerHTML = `Congratulation <br/>"${data}"!!!`;
	timeout = setTimeout(reset, timeOut * 1000);
}

function select(element) {
	let selectData = element.textContent;
	inputBox.value = selectData;
	icon.onclick = () => {
		work(selectData);
	};
	searchWrapper.classList.remove("active");
}

function showSuggestions(list) {
	let listData;
	if (!list.length) {
		userValue = inputBox.value;
		listData = `<li>${userValue}</li>`;
	} else {
		listData = list.join("");
	}
	suggBox.innerHTML = listData;
}

function upper(list) {
	return list.map((data) => {
		return data.toLocaleUpperCase();
	});
}

function log(d) {
	console.log(d);
}

function replaceAll(str, element, replacer){
    let sub = str;
    for(let i = 0; i < str.split(element).length - 1; i++){
        sub = sub.replace(element, replacer);
    }
    return sub;
}

function initialFilter(data, user, m){
    let userInit = upper(user.split(""));
	let dataInit = upper(data.split(" "));
	let bool = true;
	
    switch (m){
        case "all":
            for (let i = 0; i < dataInit.length; i++) {
                    bool = bool && dataInit[i].startsWith(userInit[i]);
                }
            return bool;
        
        case "startEnd":
            return dataInit[0].startsWith(userInit[0]) &&
            dataInit[dataInit.length - 1].startsWith(userInit[userInit.length - 1])
    }
}

function defineInitial(user) {
    let sub = [];
    user = replaceAll(user, ".", "");
	sub = suggestions.filter((data) => {
		return initialFilter(data, user, "all");
	});
    sub = sub.concat(suggestions.filter((data) => {
		return initialFilter(data, user, "startEnd");
	}));
    return sub;
}

function notAnOption(name) {
	alert("The name/initial ${name} is not exist in the data\nPlease check your input.");
}

function modeChange() {
	switch (mode) {
		case "standard":
			fixMode();
			break;

		case "fix":
			standardMode();
			break;
	}
}

function fixMode() {
	mode = "fix";
	colourStyle.style.setProperty("--background-colour", "#070870");
	modeChanger.value = "Standard Mode";
}

function standardMode() {
	mode = "standard";
	colourStyle.style.setProperty("--background-colour", "#E22C0F");
	modeChanger.value = "Fix Mode";
}

// if (navigator.onLine) {
//     alert(navigator.onLine); // cellular
// }

// if user press any key and release
