import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, throwError } from 'rxjs';
import { TokenValidator } from '../models/token-validator';
import { TokenValidatorService } from './token-validator.service';

@Injectable({
  providedIn: 'root',
})
export class TokenSsoFacadeService {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private _token!: string;
  private tokenValidatorService = inject(TokenValidatorService);

  constructor() {}

  validationToken(): Observable<TokenValidator> {
    let tkn: string = '';
    let isBase64: boolean = false;
    let error;
    let subscriptionRoute: Subscription =
      this.activatedRoute.queryParams.subscribe((params: any) => {
        if (params?.token) {
          tkn = this.transformBase64(decodeURI(params['token']));
          this._token = tkn;
          isBase64 = this.isBase64Token(tkn);
        } else {
          error = throwError(() => `El token no existe`);
          this.router.navigateByUrl('pages/error/401');
        }
      });
    if (!isBase64) {
      error = throwError(() => `El token no es base 64`);
    }
    if (error) {
      console.error(`Error en el proceso de autenticacion`);
      this.router.navigateByUrl('pages/error/401');
      return error;
    }
    subscriptionRoute.unsubscribe();
    return this.tokenValidatorService.getValidateToken(tkn);
  }

  isBase64Token(tkn: string) {
    let base64regex =
      /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;

    const validateBase64 = base64regex.test(tkn);

    if (!validateBase64) {
      return false;
    }
    return true;
  }

  transformBase64(tkn: string) {
    const token = tkn.split(' ');

    tkn = '';
    token.forEach((t, i) => {
      if (i < token.length - 1) {
        tkn += `${t}+`;
      } else {
        tkn += `${t}`;
      }
    });

    return tkn;
  }
}
