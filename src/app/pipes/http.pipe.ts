import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'http'
})
export class HttpPipe implements PipeTransform {
  transform(value: string): string {
    return value.includes('http') ? value.replace('http', 'https') : value;
  }
}
