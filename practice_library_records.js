"use strict";

const borrowRecords = [
  {
    recordId: "PM01",
    studentId: "SV101",
    bookTitle: "Lap Trinh JavaScript Nang Cao",
    borrowDays: 10,
    isReturned: false,
  },
  {
    recordId: "PM02",
    studentId: "SV102",
    bookTitle: "Cau Truc Du Lieu Va Giai Thuat",
    borrowDays: 17,
    isReturned: false,
  },
  {
    recordId: "PM03",
    studentId: "SV103",
    bookTitle: "Co So Du Lieu Quan He",
    borrowDays: 12,
    isReturned: true,
  },
];

const newRecord = {
  recordId: "PM04",
  studentId: "SV104",
  bookTitle: "Clean Code",
  borrowDays: 18,
  isReturned: false,
};
borrowRecords.push(newRecord);

for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM01") {
    borrowRecords[i].isReturned = true;
    break;
  }
}

for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === "PM03") {
    borrowRecords.splice(i, 1);
    break;
  }
}

let totalFineAmount = 0;
let overdueRecordsCount = 0;
let activeBorrowCount = 0;

console.log(
  "=========================================================================================================",
);
console.log(
  "|                                   DANH SACH PHIEU MUON SACH THU VIEN                                 |",
);
console.log(
  "=========================================================================================================",
);
console.log(
  "| Ma phieu | Ma SV  | Ten sach                       | So ngay | Trạng thai  | Qua han | Tien phat (VND) |",
);
console.log(
  "---------------------------------------------------------------------------------------------------------",
);

for (let i = 0; i < borrowRecords.length; i++) {
  const record = borrowRecords[i];

  let overdueDays = 0;
  let fine = 0;

  if (record.borrowDays > 14) {
    overdueDays = record.borrowDays - 14;
    fine = overdueDays * 5000;
    overdueRecordsCount++;
    totalFineAmount += fine;
  }

  if (!record.isReturned) {
    activeBorrowCount++;
  }

  const id = record.recordId.padEnd(8, " ");
  const student = record.studentId.padEnd(6, " ");
  const title = record.bookTitle.padEnd(30, " ");
  const days = String(record.borrowDays).padStart(7, " ");
  const status = (record.isReturned ? "Da tra" : "Dang muon").padEnd(11, " ");
  const overdueStr = (
    overdueDays > 0 ? `${overdueDays} ngay` : "0 ngay"
  ).padStart(7, " ");
  const fineStr = fine.toLocaleString("vi-VN").padStart(15, " ");

  console.log(
    `| ${id} | ${student} | ${title} | ${days} | ${status} | ${overdueStr} | ${fineStr} |`,
  );
}

console.log(
  "---------------------------------------------------------------------------------------------------------",
);
console.log(`Tong so phieu hien tai trong danh sach : ${borrowRecords.length}`);
console.log(`So phieu dang muon chua tra            : ${activeBorrowCount}`);
console.log(`So phieu bi qua han (> 14 ngay)        : ${overdueRecordsCount}`);
console.log(
  `Tong tien phat phat sinh               : ${totalFineAmount.toLocaleString("vi-VN")} VND`,
);
console.log(
  "=========================================================================================================",
);
