import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeResolverService } from './home-resolver.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path:'home',component: HomeComponent, data: { title: '发现'} , resolve: { homeDatas: HomeResolverService }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [HomeResolverService]
})
export class HomeRoutingModule { }
