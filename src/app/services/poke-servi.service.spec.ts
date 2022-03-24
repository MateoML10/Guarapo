import { TestBed } from '@angular/core/testing';

import { PokeServiService } from './poke-servi.service';

describe('PokeServiService', () => {
  let service: PokeServiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokeServiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
