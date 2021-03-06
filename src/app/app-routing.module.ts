import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pags/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pags/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pags/user-form/user-form.module').then(m => m.UserFormPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pags/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'profile/:id',
    loadChildren: () => import('./pags/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'addressForm',
    loadChildren: () => import('./pags/address-form/address-form.module').then(m => m.AddressFormPageModule)
  },
  {
    path: 'productForm',
    loadChildren: () => import('./pags/product-form/product-form.module').then(m => m.ProductFormPageModule)
  },
  {
    path: 'productForm/:id',
    loadChildren: () => import('./pags/product-form/product-form.module').then(m => m.ProductFormPageModule)
  },
  {
    path: 'product/:id',
    loadChildren: () => import('./pags/product-profile/product-profile.module').then(m => m.ProductProfilePageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pags/product-list/product-list.module').then(m => m.ProductListPageModule)
  },
  {
    path: 'products/:cat/:value',
    loadChildren: () => import('./pags/product-list/product-list.module').then(m => m.ProductListPageModule)
  },
  {
    path: 'products/:search',
    loadChildren: () => import('./pags/product-list/product-list.module').then(m => m.ProductListPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pags/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'purchases/:type',
    loadChildren: () => import('./pags/purchases-list/purchases.module').then(m => m.PurchasesListPageModule)
  },
  {
    path: 'purchase/:id',
    loadChildren: () => import('./pags/purchase-page/purchase-page.module').then(m => m.PurchasePagePageModule)
  },
  {
    path: 'chat/:id',
    loadChildren: () => import('./pags/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'adverts',
    loadChildren: () => import('./pags/adverts/adverts.module').then( m => m.AdvertsPageModule)
  },
  {
    path: 'ADMproducts',
    loadChildren: () => import('./pags/admin-products/admin-products.module').then( m => m.AdminProductsPageModule)
  },
  {
    path: 'ADMusers',
    loadChildren: () => import('./pags/admin-users/admin-users.module').then( m => m.AdminUsersPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pags/error/error.module').then( m => m.ErrorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
