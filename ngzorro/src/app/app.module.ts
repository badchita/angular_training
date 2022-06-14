import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './views/products/products.component';
import { TableComponent } from './components/table/table.component';
import { ViewProductComponent } from './views/details/view-product/view-product.component';
import { EditProductsComponent } from './views/edit/edit-products/edit-products.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { ReactiveFormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    TableComponent,
    ViewProductComponent,
    EditProductsComponent,
    MainHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzTableModule,
    NzTagModule,
    NzIconModule,
    NzModalModule,
    NzGridModule,
    NzTypographyModule,
    NzFormModule,
    NzInputNumberModule,
    NzPopconfirmModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
