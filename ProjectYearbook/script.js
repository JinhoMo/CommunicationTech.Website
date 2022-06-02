// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
const stateTag = document.querySelector(".wrapper").querySelector("h1");
let stateMsg = stateTag.innerText;
let timeOut = 3;
let count = -1;

// window.addEventListener("keydown", (e) => {
//     const key = document.getElementById(e.key);
//     if (count == -1) {
        
//     }
//     allList[count].classList.add("active");
//   });
  
//   window.addEventListener("keyup", (e) => {
//     const key = document.getElementById(e.key);
//     if (key) key.classList.remove("pressed");
//   });

// if user press any key and release
inputBox.onkeyup = (e) => {
	let userData = e.target.value; //user enetered data
	let emptyArray = [];
	if (userData) {
		let k = e.key;
		if (k == "Enter") {
			work(userData);
		}

		icon.onclick = () => {
			work(userData);
		};

		emptyArray = suggestions.filter((data) => {
			//filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
			return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
		});

		emptyArray = emptyArray.map((data) => {
			// passing return data inside li tag
			return (data = `<li>${data}</li>`);
		});

		searchWrapper.classList.add("active"); //show autocomplete box

        // if user input is empty space, disable autocomplete box
		if (!inputBox.value.trim()) {
			searchWrapper.classList.remove("active");
		}

        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");

		if (k == "ArrowDown"){
            count += 1;
            if (count >= allList.length){
                count = allList.length - 1;
            }
            console.log(count);
            console.log(allList[count]);
            allList[count].classList.add("active");
		} else if (k == "ArrowUp"){
            count -= 1;
            if (count < -1){
                count = -1
            }
            try {
                console.log(count);
                console.log(allList[count]);
                allList[count].classList.add("active");
            } catch (err) {
                console.log("selected input")
                inputBox.focus();
            }
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
	inputBox.value = "";
	stateTag.innerHTML = `Congratulation "${data}"!!!`;
	setTimeout(reset, timeOut * 1000);
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

function notAnOption(name) {
	alert("The name/initial ${name} is not exist in the data\nPlease check your input.");
}
