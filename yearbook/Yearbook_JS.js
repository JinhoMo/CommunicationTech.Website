function readExcel() {
	let input = event.target;
	let reader = new FileReader();
	reader.onload = function () {
		let data = reader.result;
		let workBook = XLSX.read(data, { type: "binary" });
		workBook.SheetNames.forEach(function (sheetName) {
			console.log("SheetName: " + sheetName);
			let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
			console.log(JSON.stringify(rows));
		});
	};
	reader.readAsBinaryString(input.files[0]);
}

window.open("https://8percent.kr","안녕하세요^^","width=800,height=400");