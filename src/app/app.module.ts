import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AddAssignmentComponent} from './assingment/add-assignment/add-assignment.component'
import { AssingmentComponent } from './assingment/assingment.component';
import { SubmittedDirective } from './shared/submitted.directive';
import { UnsubmittedDirective } from './shared/unsubmitted.directive';
import  {AssignmentDetailsComponent} from './assingment/assignment-details/assignment-details.component';
import {MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepicker,MatNativeDateModule, MatDatepickerModule, MatRadioGroup, MatRadioModule, MatListModule, MatCardModule, MatCheckbox, MatCheckboxModule} from  '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AssingmentComponent,
    SubmittedDirective,
    UnsubmittedDirective,
    AssignmentDetailsComponent,
    AddAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatListModule,
    MatCardModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
