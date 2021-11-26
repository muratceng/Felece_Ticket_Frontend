import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { TrainListComponent } from './components/train-list/train-list.component';
import { TrainService } from './services/train.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TrainListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TrainService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
