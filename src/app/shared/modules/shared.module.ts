import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from '../components/header/tool-bar/tool-bar.component';

@NgModule({
  declarations: [ToolBarComponent],
  imports: [CommonModule],
  exports: [ToolBarComponent],
})
export class SharedModule {}
