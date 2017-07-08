import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule, MdCardModule, MdCheckboxModule, MdCommonModule, MdGridListModule, MdMenuModule,
    MdToolbarModule
} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCheckboxModule,
        MdMenuModule,
        MdCommonModule,
        MdToolbarModule,
        MdCardModule,
        MdGridListModule
    ],
    providers   : [],
    bootstrap   : [AppComponent]
})
export class AppModule {
}
