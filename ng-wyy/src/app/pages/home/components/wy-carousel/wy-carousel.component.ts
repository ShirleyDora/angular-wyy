import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection:ChangeDetectionStrategy.OnPush//不需要变更检测，把策略改为OnPush,提升性能
})
export class WyCarouselComponent implements OnInit {
  // 小圆点
  @ViewChild('dot',{ static: true }) dotRef: TemplateRef<any>;
  // 小圆点高亮样式索引
  @Input() activeIndex = 0;
  //左右箭头
  @Output() changeSlide = new EventEmitter<'pre'|'next'>();
  constructor() { }

  ngOnInit(): void {
  }
  //左右箭头
  onChangeSlide(type: 'pre'|'next'){
    this.changeSlide.emit(type);
  }

}
