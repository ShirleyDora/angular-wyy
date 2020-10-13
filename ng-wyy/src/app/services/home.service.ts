import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner, HotTag, SongSheet, } from './data-type/common.types';
import { API_CONFIG, ServicesModule } from './services.module';
import { map } from 'rxjs/internal/operators';
@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private url: string
  ) { }
  //获取轮播图数据
  getBanners(): Observable<Banner[]>{
    return this.http.get(this.url+'banner')
    .pipe(map((res: { banners: Banner[] }) => res.banners));
  }
  //获取热门标签
  getHotTags(): Observable<HotTag[]>{
    return this.http.get(this.url+'playlist/hot')
    .pipe(map((res: { tags: HotTag[] }) => {
      return res.tags.sort((x:HotTag,y:HotTag) => {
        return x.position - y.position
      }).slice(0,5);
    }));
  }
  //获取热门歌单
  getPersonalSheetList(): Observable<SongSheet[]>{
    return this.http.get(this.url+'personalized')
    .pipe(map((res: { result: SongSheet[] }) => res.result.slice(0,16)));
  }
}
