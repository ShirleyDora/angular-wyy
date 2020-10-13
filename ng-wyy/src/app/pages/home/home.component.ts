import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { map } from 'rxjs/internal/operators';
import { Banner, HotTag, Singer, SongSheet } from 'src/app/services/data-type/common.types';
import { SheetService } from 'src/app/services/sheet.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  //轮播图数据
  banners: Banner[];
  //热门标签数据
  hotTags: HotTag[];
  //热门歌单数据
  songSheetList: SongSheet[];
  //入驻歌手数据
  singers: Singer[];
  //小圆点索引
  carouselActiveIndex = 0;
  //左右箭头获取轮播图组件实例
  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;
  //渲染数据
  constructor(
    private route: ActivatedRoute,
    private sheetServe: SheetService
  ) { 
    this.route.data.pipe(map(res => res.homeDatas)).subscribe(([banners,hotTags,songSheetList,singers]) => {
      //获取轮播图
      this.banners = banners;
      //获取热门标签
      this.hotTags = hotTags;
      //获取热门歌单
      this.songSheetList = songSheetList;
      //获取入驻歌手
      this.singers = singers;
    });
  }
  ngOnInit(): void {
  }
  //小原点索引移动获取方法
  onBeforeChange({ to }){
    this.carouselActiveIndex = to;
  }
  //左右箭头
  onChangeSlide( type: 'pre'|'next' ){
    this.nzCarousel[type]();
  }
  //播放歌单
  onPlaySheet( id: number){
    //console.log('id: ',id);
    this.sheetServe.playSheet(id).subscribe(res => {
      console.log('res: ',res);
    })
  }
}
