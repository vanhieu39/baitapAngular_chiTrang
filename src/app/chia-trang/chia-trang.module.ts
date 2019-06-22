import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChiaTrangComponent } from "./chia-trang.component";

@NgModule({
  declarations: [ChiaTrangComponent],
  exports: [ChiaTrangComponent],
  imports: [CommonModule]
})
export class ChiaTrangModule {}
