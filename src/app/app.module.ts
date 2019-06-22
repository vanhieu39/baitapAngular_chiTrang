import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ChiaTrangModule } from "./chia-trang/chia-trang.module";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ChiaTrangModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
