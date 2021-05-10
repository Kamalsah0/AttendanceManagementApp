import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AttendanceListComponent } from './attendance-list/attendance-list.component';
import { CreateAttendanceComponent } from './create-attendance/create-attendance.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateAttendanceComponent } from './update-attendance/update-attendance.component';


@NgModule({
  declarations: [
    AttendanceListComponent,
    CreateAttendanceComponent,
    HomePageComponent,
    UpdateAttendanceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  exports:[
    AttendanceListComponent,
    CreateAttendanceComponent,
    HomePageComponent,
    UpdateAttendanceComponent
  ]
})
export class AttendanceModule { }
