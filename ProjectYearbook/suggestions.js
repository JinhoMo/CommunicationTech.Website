const dataBase = "list.csv";
let nameList = {
    available : [],
    eliminated : []
};
var allText;
update();

function readFile(file) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function () {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				allText = rawFile.responseText;
			}
		}
	};
	rawFile.send(null);
}

function writeFile(file){

}

function update() {
	readFile(dataBase);
    allText = replaceAll(allText, "\n", "");
    nameList = {
        available : [],
        eliminated : []
    };
    let list;
    for (let v of allText.split("\r")){
        list = v.split(",");
        nameList.available.push(list[0]);
        nameList.eliminated.push(list[1]);
    }
    nameList.available = avoidEmpty(nameList.available);
    nameList.eliminated = avoidEmpty(nameList.eliminated);
}

function avoidEmpty(list){
    return list.filter((data) => {return data != ""});
}

function replaceAll(str, element, replacer){
    let sub = str;
    for(let i = 0; i < str.split(element).length - 1; i++){
        sub = sub.replace(element, replacer);
    }
    return sub;
}