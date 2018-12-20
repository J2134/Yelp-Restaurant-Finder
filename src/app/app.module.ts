import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule } from "@agm/core";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import {
  HttpClient,
  HttpClientModule,
  HttpClientJsonpModule
} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDzd7Cn-eb5waXrtnB38qczPkQ7myBDJmA",
      libraries: ["places"]
    })
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
