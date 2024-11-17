import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NavigationComponent } from "./navigation/navigation.component";

@NgModule({
    declarations: [NavigationComponent],
    exports: [NavigationComponent],
    imports: [BrowserModule]
})
export class SharedModule {}