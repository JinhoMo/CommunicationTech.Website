function add(element):
    console.log(suggestions.push(element));

console.log()


// // function readExcel() {
// //     let input = event.target;
// //     let reader = new FileReader();
// //     reader.onload = function() {
// //         let data = reader.result;
// //         let workBook = XLSX.read(data, { type: "binary" });
// //         workBook.SheetNames.forEach(function(sheetName) {
// //             console.log("SheetName: " + sheetName);
// //             let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
// //             console.log(JSON.stringify(rows));
// //         });
// //     };
// //     reader.readAsBinaryString(input.files[0]);
// // }

// function myFunction() {
//     let input = document.getElementById("myText").value;
//     alert(input)
// }

// function GetData() {
//     var excel = new ActiveXObject("Excel.Application");
//     var excel_file = excel.Workbooks.Open("W://yearbook/listTest.xlsx");
//     var excel_sheet = excel.Worksheets("Sheet1");
//     var totalColCount = excel_sheet.UsedRange.Columns.Count;
//     var totalRowCount = excel_sheet.UsedRange.Rows.Count;
//     var htmlStr = " < table > ";
//     for (i = 0; i < totalRowCount; i++) {
//         htmlStr = htmlStr + " < tr > ";
//         for (j = 0; j < totalColCount; j++)
//             htmlStr = htmlStr + " < td > " + excel_sheet.Cells(i, j).Text + “ < /td>”;
//         htmlStr = htmlStr + " < /tr > ";
//     }
//     document.getElementById('ExcelContent').innerHTML = htmlStr;
// }

// // window.open("https://8percent.kr", "안녕하세요^^", "width=800,height=400");

