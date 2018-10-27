import { TestBed, async, inject } from '@angular/core/testing';

import { CatedraticoGuard } from './catedratico.guard';

describe('CatedraticoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatedraticoGuard]
    });
  });

  it('should ...', inject([CatedraticoGuard], (guard: CatedraticoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
