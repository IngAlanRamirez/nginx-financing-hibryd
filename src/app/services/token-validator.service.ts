import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenValidator } from '../models/token-validator';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenValidatorService {
  private http = inject(HttpClient);

  constructor() {}

  getValidateToken(tkn: string): Observable<TokenValidator> {
    const headers = new HttpHeaders({
      Authorization: tkn,
    });
    const url: string = environment.session;
    return this.http.post<TokenValidator>(url, { headers });
  }
}
