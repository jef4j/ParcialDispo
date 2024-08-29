import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'product/:id', loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailPageModule) },
  { path: 'cart', loadChildren: () => import('./pages
]
