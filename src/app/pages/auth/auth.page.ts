import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { TokenSsoFacadeService } from 'src/app/services/token-sso-facade.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
  ],
})
export class AuthPage implements OnInit {
  private spinner = inject(NgxSpinnerService);
  private _tokenSsoFacadeService = inject(TokenSsoFacadeService);
  private _router = inject(Router);

  constructor() {}

  ngOnInit() {
    // Mostrar spinner
    this.spinner.show();
    if (!this._tokenSsoFacadeService._token) {
      const responseToken = this._tokenSsoFacadeService.validationToken();
      const validationToken = async () => {
        await firstValueFrom(responseToken)
          .then((resp) => {
            const SESSION_DATA = resp.SecObjRec.SecObjInfoBean.SecObjData;
            const BUC = SESSION_DATA.find(
              (data) => data.SecObjDataKey === 'buc'
            );
            const CARD_NUMBER = SESSION_DATA.find(
              (data) => data.SecObjDataKey === 'cardNumber'
            );
            const CARD_TYPE = SESSION_DATA.find(
              (data) => data.SecObjDataKey === 'cartType'
            );
            const IMAGE_CODE = SESSION_DATA.find(
              (data) => data.SecObjDataKey === 'codStamp'
            );
            const COD_STAMP = SESSION_DATA.find(
              (data) => data.SecObjDataKey === 'codStamp'
            );
            const CARD_NAME = SESSION_DATA.find(
              (data) => data.SecObjDataKey === 'cardName'
            );
            const NUM_CONTRATO = SESSION_DATA.find(
              (data) => data.SecObjDataKey === 'numContrato'
            );
            this.spinner.hide();
            this._router.navigate(['/pages/purchases']);
          })
          .catch((error) => {
            this.spinner.hide();
            this._router.navigate(['/pages/error']);
          });
      };
      validationToken();
    }
  }
}
