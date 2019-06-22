import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-chia-trang",
  templateUrl: "./chia-trang.component.html",
  styleUrls: ["./chia-trang.component.scss"]
})
export class ChiaTrangComponent implements OnInit {
  mangDanhMucSP: any = [
    { maSP: 1, tenSP: "Sony XZ", gia: 1000 },
    { maSP: 2, tenSP: "Sony XZ2", gia: 1000 },
    { maSP: 3, tenSP: "Sharp A2", gia: 1000 },
    { maSP: 4, tenSP: "HTC U Ultra", gia: 1000 },
    { maSP: 5, tenSP: "HTC U12 Plus", gia: 1000 },
    { maSP: 6, tenSP: "Iphone XS MAX", gia: 1000 },
    { maSP: 7, tenSP: "Iphone XR", gia: 1000 },
    { maSP: 8, tenSP: "Xiaomi Note 3", gia: 99000 },
    { maSP: 9, tenSP: "Xiaomi Mi 8", gia: 1000 },
    { maSP: 10, tenSP: "Galaxy S9 Plus", gia: 1000 },
    { maSP: 11, tenSP: "Nokia X9", gia: 1000 }
  ];
  constructor() {}

  ngOnInit() {}
  themSanPham(maSP, tenSP, gia) {
    const objSanPham = {
      maSP: maSP,
      tenSP: tenSP,
      gia: gia
    };
    this.mangDanhMucSP.push(objSanPham);
  }
  xoaSanPham(maSP) {
    let viTri = this.mangDanhMucSP.findIndex(function(item) {
      return maSP === item.maSP;
    });
    this.mangDanhMucSP.splice(viTri, 1);
  }
}
