/**
 * Mô hình 3 khối:
 *  * -Đầu vào
 * Gỉa sử: 
 *  + Tên phim: BigHero
 *  + giá vé người lớn: 8usd
 *  + giá vé trẻ em : 3 usd
 *  + số lượng vé người lớn đã bán: 68 vé
 *  + số lượng vé trẻ em đã bán: 52 vé
 *  + tỷ lệ phần phần trăm quyên góp: 8%
 * + giaVeNguoiLOn :
 * -Xử lý: 
 *  + Tên phim
 *  + Doanh Thu vé người lớn:giá vé người lớn * số lượng vé người lớn đã bán
 *  + Doanh Thu vé trẻ em: giá vé trẻ em * số lượng vé trẻ em đã bán
 *  + Tổng doanh thu: Doanh Thu vé người lớn * Doanh Thu vé trẻ em
 *  + Số tiền trích ra để từ thiện: Tổng doanh thu * tỷ lệ phần phần trăm quyên góp
 *  + Số tiền còn lại:Tổng doanh thu  - Số tiền trích ra để từ thiện


 * -Đầu ra: Xuất kết quả
 *  + Doanh Thu vé người lớn
 *  + Doanh Thu vé trẻ em
 *  + Tổng doanh thu
 *  + Số tiền trích ra để từ thiện
 *  + Số tiền còn lại
 */
console.log("B6: Case_study")
var tenPhim = "Big Hero";
var giaVeNguoiLon = 8;
var giaVeTreEm = 3;
var slgVeNguoiLon = 68;
var slgVeTreEm = 52;
var tyLeTrichTien = (8 / 100);
var tongVe = slgVeNguoiLon + slgVeTreEm;
var doanhThuVeNguoiLon = giaVeNguoiLon * slgVeNguoiLon;
var doanhThuVeTreEm = giaVeTreEm * slgVeTreEm;
var tongDoanhThu = doanhThuVeNguoiLon + doanhThuVeTreEm;
var tienTrichTuThien = tongDoanhThu * tyLeTrichTien;
var doanhThuConLai = tongDoanhThu - tienTrichTuThien;
//Xuất kết quả
console.log("Tên phim: " + tenPhim)
console.log("Tổng vé đã bán: " + tongVe)
console.log("Doanh Thu vé người lớn: " + doanhThuVeNguoiLon + " USD");
console.log("Doanh Thu vé trẻ em: " + doanhThuVeTreEm + " USD");
console.log("Tổng doanh thu: " + tongDoanhThu + " USD");
console.log("Số tiền trích ra để từ thiện: " + tienTrichTuThien + " USD");
console.log("Số tiền còn lại: " + doanhThuConLai + " USD ");
