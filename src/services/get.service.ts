import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  printToConsole(arg) {
    console.log(arg);
  }
}
