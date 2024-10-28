import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ClassifyPipe } from '../classify.pipe';



@NgModule({
  declarations: [ClassifyPipe],
  imports: [],
  exports:[
    CommonModule,
    NgxPaginationModule,
    ClassifyPipe
    
  ]
})
export class SharedModule { }
