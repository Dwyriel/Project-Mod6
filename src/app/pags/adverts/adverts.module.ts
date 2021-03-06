import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvertsPageRoutingModule } from './adverts-routing.module';

import { AdvertsPage } from './adverts.page';
import { ComponentModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvertsPageRoutingModule,
    ComponentModule
  ],
  declarations: [AdvertsPage]
})
export class AdvertsPageModule {}
