import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSortModule} from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
//import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';


import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {LoginService} from './service/login.service';
import { IndiceComponent } from './component/indice/indice.component';
import { DatosComponent } from './component/indice/datos/datos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndiceComponent,
    DatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatSortModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatGridListModule,
    MatTabsModule,
    MatTooltipModule
    //,    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
