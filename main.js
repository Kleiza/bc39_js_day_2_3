/**
 * Bài tập 1: Tính lương nhân viên
 * 
 *  Đầu vào:
 *      Lương 1 ngày = salaryDaily = 100.000
 *      Số ngày làm = workDay
 *          
 *  Xử lý:
 *      Tổng lương = salaryTotal = salaryDaily * workDay
 * 
 *  Đầu ra:
 *      In kết quả salaryTotal lên màn hình
 * 
 */
document.getElementById("btnSalary").onclick = function () {
    var salaryDaily = document.getElementById("salaryDaily").value * 1;
    var workDay = document.getElementById("workDay").value * 1;

    var salaryTotal = salaryDaily * workDay;

    var currentFormat = Intl.NumberFormat("VN-vn");

    var rs1 = "";
    rs1 += "<p>Tổng lương nhân viên là: " + currentFormat.format(salaryTotal) + "VND</p>";
    document.getElementById("salaryTotal").innerHTML = rs1;
    document.getElementById("salaryTotal").classList.add("alert-success");
}

/**
* Bài tập 2: Tính giá trị trung bình
* 
*  Đầu vào:
*      Nhập 5 số thực num1, num2, num3, num4, num5
* 
*  Xử lý:
*      Tính tổng 5 số = numTotal = num1 + num2 + num3 + num4 + num5
*      Tính trung bình = numAverage = numTotal / 5
* 
*  Đầu ra:
*      In kết quả numAverage lên màn hình
*      
*/

document.getElementById("btnAverage").onclick = function () {
    var num1 = document.getElementById("num1").value * 1;
    var num2 = document.getElementById("num2").value * 1;
    var num3 = document.getElementById("num3").value * 1;
    var num4 = document.getElementById("num4").value * 1;
    var num5 = document.getElementById("num5").value * 1;

    var numTotal = num1 + num2 + num3 + num4 + num5;
    var numAverage = numTotal / 5;

    var rs2 = "";
    rs2 += "<p>Giá trị trung bình của 5 số là: " + numAverage + "</p>";

    document.getElementById("numAverage").innerHTML = rs2;
    document.getElementById("numAverage").classList.add("alert-success");
}




/**
* Bài tập 3: Quy đổi tiền
* 
*  Đầu vào:
*      Giá trị quy đổi hiện tại 1USD = 23.500VND -> gán biến exchangeRate = 23500;
*      Nhập số tiền đô cần quy đổi -> gán biến usdTotal;
*  
*  Xử lý:
*      Số tiền VND sau quy đổi -> gán biến vndTotal; 
*      Tính tiền VND: vndTotal = usdTotal * exchangeRate;
* 
*  Đầu ra:
*      In kết quả vndTotal lên màn hình
*/

document.getElementById("btnExchange").onclick = function () {
    var exchangeRate = 23500;
    var usdTotal = document.getElementById("usdTotal").value * 1;

    var vndTotal = exchangeRate * usdTotal;

    var currentFormat = Intl.NumberFormat("VN-vn");

    var rs3 = "";
    rs3 += "<p>Tổng số tiền VND sau khi quy đổi là: " + currentFormat.format(vndTotal) + "VND</p>";

    document.getElementById("vndTotal").innerHTML = rs3;
    document.getElementById("vndTotal").classList.add("alert-success");
}



/**
* Bài tập 4: Tính diện tích, chu vi hình chữ nhật
* 
*  Đầu vào:
*     Giá trị chiều dài: hcnDai
*     Giá trị chiều rộng: hcnRong
* 
*  Xử lý:
*      Diện tích hcn: hcnS = hcnDai * hcnRong
*      Chu vi hcn: hcnV = (hcnDai + hcnRong)*2
* 
*  Đầu ra:
*      In kết quả hcnS và hcnV lên màn hình
*/

document.getElementById("btnHCN").onclick = function () {
    var hcnDai = document.getElementById("hcnDai").value * 1;
    var hcnRong = document.getElementById("hcnRong").value * 1;

    var hcnDT = hcnDai * hcnRong;
    var hcnCV = (hcnDai + hcnRong) * 2;

    var rs4 = "";
    rs4 += "<p>Diện tích hcn là: " + hcnDT + "</p>";
    rs4 += "<p>Chu vy hcn là: " + hcnCV + "</p>";

    document.getElementById("hcnKetqua").innerHTML = rs4;
    document.getElementById("hcnKetqua").classList.add("alert-success");
}


/**
* Bài tập 5: Tính tổng 2 ký số
* 
*  Đầu vào:
*      Ký số nhập vào: number
*
*  Xử lý:
*      Tính số hàng đơn vị: number chia 10 lấy phần dư -> numberDV = number % 10
*      Tính số hàng chục: number chia 10 lấy phần nguyên -> numberCh = number / 10
*      Tổng 2 ký số numberTotal = numberDV + numberCh;
* 
*  Đầu ra:
*      In kết quả numberTotal lên màn hình
*/

document.getElementById("btnNumber").onclick = function () {
    var number = document.getElementById("number").value * 1;

    var numberDV = number % 10;
    var numberCH = Math.floor(number / 10);

    var numberTotal = numberDV + numberCH;

    var rs5 = "";
    rs5 += "<p>Tổng 2 ký số của " + number + " là: " + numberTotal + "</p>";

    document.getElementById("numberTotal").innerHTML = rs5;
    document.getElementById("hcnKetqua").classList.add("alert-success");
}
