import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';
import { Singer } from './data-type/common.types';
import { API_CONFIG, ServicesModule } from './services.module';
import queryString from 'query-string';
type SingerParams = {
  offset: number;
  limit: number;
  cat?: string;
}
const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  cat: '5001'
}
@Injectable({
  providedIn: ServicesModule
})
export class SingerService {

  constructor(
    private http: HttpClient,
    @Inject(API_CONFIG) private url: string
  ) { }
  /*getBanners(): Observable<Banner[]>{
    return this.http.get(this.url+'banner')
    .pipe(map((res: { banners: Banner[] }) => res.banners));
  }*/
  getEnterSinger( args: SingerParams = defaultParams ): Observable<Singer[]>{
    const params = new HttpParams ({ fromString: queryString.stringify(args) });
    return this.http.get(this.url+'artist/list',{ params })
    .pipe(map((res: { artists: Singer[] }) => res.artists));
  }
}
