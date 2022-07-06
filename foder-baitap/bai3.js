/**
 * Mô hình 3 khối
 * - Đầu vào: Mệnh giá 1usd = 23.500vnđ. User cần tính 2usd sang tiền Việt
 * - Xử lý: 
 *  + tạo biến gán n = 2 là số tiền usd mà user nhập 
 *  + m = 23.500 : là giá trị quy đổi trên 1 usd 
 *  + Số tiền quy đổi = n * m
 * - Đầu ra: Số tiền quy đổi trên n mà user nhập
 */
console.log("B3: Tiền quy đổi")
var n = 2;
var m = 23500;
var tienQuyDoi = n * m;
console.log("Số tiền quy đổi: " + tienQuyDoi + " VND")