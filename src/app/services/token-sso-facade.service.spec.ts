import { TestBed } from '@angular/core/testing';

import { TokenSsoFacadeService } from './token-sso-facade.service';

describe('TokenSsoFacadeService', () => {
  let service: TokenSsoFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenSsoFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
