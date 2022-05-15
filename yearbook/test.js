// - 쓰기 -

function readExcel(){
// Declare the variables
var Excel, Book;

// Create the Excel application object.
Excel = new ActiveXObject("Excel.Application");

// Make Excel visible.
Excel.Visible = true;

// Create a new work book.
Book = Excel.Workbooks.Add()

// Place some text in the first cell of the sheet.
Book.ActiveSheet.Cells(1,1).Value = "This is column A, row 1";

// Save the sheet.
Book.SaveAs("C:/Users/mjhsu/OneDrive/문서/코딩파일/github/CommunicationTech.Website/yearbook/listTest.xlsx");

// Close Excel with the Quit method on the Application object.
Excel.Application.Quit();

}

// - 열기 -

function StartExcel() {
var oExcel;

var oWBook;
oExcel = new ActiveXObject("Excel.Application");

oExcel.Visible = true;

oExcel.workbooks.open("C:/Users/mjhsu/OneDrive/문서/코딩파일/github/CommunicationTech.Website/listTest.xlsx");

oExcel.Quit();

oExcel = null;
}