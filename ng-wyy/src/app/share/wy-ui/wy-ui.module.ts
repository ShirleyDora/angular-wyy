import { NgModule } from '@angular/core';
import { PlayCountPipe } from '../play-count.pipe';
import { SingleSheetComponent } from './single-sheet/single-sheet.component';
import { WyPlayerModule } from './wy-player/wy-player.module';

@NgModule({
  declarations: [
    SingleSheetComponent,
    PlayCountPipe,    
  ],
  imports: [
    WyPlayerModule
  ],
  exports: [
    SingleSheetComponent,
    PlayCountPipe,
    WyPlayerModule
  ]
})
export class WyUiModule { }
