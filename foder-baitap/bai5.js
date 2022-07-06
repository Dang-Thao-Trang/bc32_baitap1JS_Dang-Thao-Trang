/**
 * Mô hình 3 khối
 * - Giả sử n = 68 là số có 2 chữ số mà user nhập
 * - Đầu vào: 
 *  + gán n = 68
 * - Xử lý:
 *  + lấy số đơn vị : soHangDv = n % 10
 *  + lấy số hàng chục: soHangChuc = Math.floor(n /10)
 * - Đầu ra: tổng 2 ký số user nhập
 */
console.log("B5: Tính tổng 2 số ký")
var n = 68;
var soHangDv = n % 10;
var soHangChuc = Math.floor(n / 10);
var tongSoKy = soHangDv + soHangChuc;
console.log("Tổng 2 số ký: " + tongSoKy);