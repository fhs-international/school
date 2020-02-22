import { Component } from '@angular/core';
import { IpcRenderer } from 'electron';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'school';
  showFiller = false;
  private ipc: IpcRenderer;
  constructor() {
    if ((window as any).require) {
      try {
        this.ipc = (window as any).require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('App not running inside Electron!');
    }
  }

  openModal() {
    console.log('Open a modal');
    this.ipc.send('openModal');
  }
}
