/**
 * Mô hình 3 khối
 * - Đầu vào
 *  + Giả sử số ngày làm nhân viên A có n=26 ngày trong tháng 7/2022. Trong đó n là số ngày công được user ghi nhận
 *  + tiền lương 1 ngày là 100.000vnd
 * 
 * -Xử lý dữ liệu:
 *  + Tiền lương tháng = n * 100.000vnd
 * 
 * - Đầu ra: Tiền lương của nhân viên A tháng 7/2022 
 */
console.log("B1: Tính tiền lương nhân viên")
var soNgayLam = 26;
var tienCongNgay = 100000;
var tienLuongThang = soNgayLam * tienCongNgay;
var tênNhanVien = "Nguyễn Văn A: "
console.log("Tiền Lương t7/2022 của nhân viên " + tênNhanVien + tienLuongThang);