import { TestBed, async, inject } from '@angular/core/testing';

import { PreventReSignInGuard } from './prevent-re-sign-in.guard';

describe('PreventReSignInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PreventReSignInGuard]
    });
  });

  it('should ...', inject([PreventReSignInGuard], (guard: PreventReSignInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
