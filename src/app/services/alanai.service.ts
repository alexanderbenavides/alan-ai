import { Injectable } from '@angular/core';
import alanBtn from '@alan-ai/alan-sdk-web';
import { Subject } from 'rxjs';

interface Alan {
  command: string,
  response: any,
  number: number
}

@Injectable({
  providedIn: 'root'
})
export class AlanaiService {
  alanBtnInstance: any;
  command = '';

  constructor() {
    this.config();
  }

  private config() {
    if (!this.alanBtnInstance) {
      this.alanBtnInstance = alanBtn({
        key: 'bca7c500b0f2a309f4dd2c5d4b84bc042e956eca572e1d8b807a3e2338fdd0dc/stage',
        onCommand: ({command, response, number}: any) => {
          this.command = command;
          this.sendCommandData({command, response, number});
        },
      });
    }
  }


  // Services

  private commandData = new Subject<Alan>();
  public data$ = this.commandData.asObservable();

  sendCommandData(data: Alan) {
    this.commandData.next(data);
  }

}
