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
import {Routes, RouterModule} from '@angular/router';
import { EditComponent } from './assingment/edit/edit.component'

const routes: Routes = [
  { path: '', component: AssingmentComponent},
  { path: 'home', component: AssingmentComponent},
  { path: 'add', component: AddAssignmentComponent},
  { path: 'update/:name', component: AssignmentDetailsComponent},
  { path: 'delete/:name', component: AssignmentDetailsComponent},
  { path: 'updateass/:name', component: EditComponent},
  


];


@NgModule({
  declarations: [
    AppComponent,
    AssingmentComponent,
    SubmittedDirective,
    UnsubmittedDirective,
    AssignmentDetailsComponent,
    AddAssignmentComponent,
    EditComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
