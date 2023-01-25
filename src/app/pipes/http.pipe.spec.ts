import { HttpPipe } from './http.pipe';

describe('HttpPipe', () => {
  const pipe = new HttpPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform http into https', () => {
    expect(pipe.transform('http://www.google.com')).toEqual('https://www.google.com');
  });
});
