/**
 * GIAI THICH 2 LOI LOGIC TRONG MA NGUON BAN DAU:
 * 1. Loi lech mot don vi (Off-by-one Error):
 *    - Dieu kien lap ban dau la `cupIndex < orderQuantity` (voi orderQuantity = 3).
 *    - Vong lap chi chay 2 lan (cupIndex = 1 va cupIndex = 2), khien hoa don 
 *      chi tinh tien cho 2 ly thay vi du 3 ly theo yeu cau nghiep vu.
 * 
 * 2. Loi dat sai pham vi tinh chiet khau (Compound Discount Error):
 *    - Lenh tinh chiet khau `totalBill = totalBill * 0.9` bi dat BEN TRONG than vong lap.
 *    - Dieu nay lam cho moi lan cong don 1 ly, he thong lai ap dung giam gia 10% 
 *      len tong tien luy ke tu buoc truoc, gay ra hien tuong giam gia dồn dồn 
 *      nhieu lan va lam sai lech nghiem trọng ket qua tai chinh cuoi cung.
 */

const drinkName = "Phin Sữa Đá";
const basePrice = 29000;
const drinkSize = "M";
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;

let sizeUpcharge = 0;
if (drinkSize === "M") {
  sizeUpcharge = 6000;
} else if (drinkSize === "L") {
  sizeUpcharge = 10000;
}

const singleCupPrice = basePrice + sizeUpcharge + (toppingsPerCup * toppingPrice);

let totalBill = 0;
for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
  totalBill += singleCupPrice;
}

if (isGoldMember) {
  totalBill = totalBill * 0.9;
}

console.log("Tổng thanh toán:", totalBill, "VNĐ");