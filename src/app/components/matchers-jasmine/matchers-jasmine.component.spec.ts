import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJasmineComponent } from './matchers-jasmine.component';

describe('MatchersJasmineComponent', () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersJasmineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the use of toEqual', () => {
    expect(true).toEqual(true);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });

  it('should test the use of toBe', () => {
    const age = 10;
    expect(age).toBe(10);
  });

  it('should test the use of toBeTruthy', () => {
    expect(true).toBeTruthy();
    expect(10).toBeTruthy();
    expect({}).toBeTruthy();
  });

  it('should test the use of toBeFalsy', () => {
    expect("").toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  it('should test the use of toBeTrue', () => {
    expect(true).toBeTrue();
    expect(!'').toBeTrue();
  });

  it('should test the use of toBeFalse', () => {
    expect(false).toBeFalse();
    expect(!!'').toBeFalse();
  });

  it('should test the use of not', () => {
    expect('Danilo').not.toEqual('Jessica');
  });

  it('should test the use of toContain', () => {
    expect('Marvel').toContain('rve');
    expect([1, 2, 3]).toContain(2);
  });

  it('should test the use of toBeDefined', () => {
    let name;
    // expect(name).toBeDefined(); // fails
    name = 'Ana';
    expect(name).toBeDefined(); // works
  });

  it('should test the use of toBeUndefined', () => {
    let name;
    expect(name).toBeUndefined(); // works
    // name = 'George';
    // expect(name).toBeUndefined(); // fails
  });

  it('should test the use of toBeNull', () => {
    let name;
    // expect(name).toBeNull(); // fails
    name = null;
    expect(name).toBeNull(); // works
  });

  it('should test the use of toBeNaN', () => {
    let text = '123test';
    expect(NaN).toBeNaN();
    expect(+text).toBeNaN();
  });

  it('should test the use of toBeGreaterThan', () => {
    expect(10).toBeGreaterThan(2);
    expect('10').toBeGreaterThan(7);
  });

  it('should test the use of toBeLessThan', () => {
    expect(10).toBeLessThan(20);
    expect('10').toBeLessThan(13);
  });

  it('should test the use of toBeCloseTo', () => {
    expect(35.20).toBeCloseTo(35.2, 1);
  });

  it('should test the use of toMatch', () => {
    expect('Marvel').toMatch(/mArV/i);
  });

  it('should test the use of toThrow', () => {
    expect(function () {
      throw new Error('My error');
    }).toThrow();
  });
});
