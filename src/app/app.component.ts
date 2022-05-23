import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'card-app';
  links = [
    { path: '/login', icon: 'vpn_key', title: 'Login' },
    { path: '/sets', icon: 'view_list', title: 'Sets' },
    { path: '/home', icon: 'home', title: 'Home' },
  ];
  backend = [{ path: '/backend/child', icon: 'face', title: 'Backend' }];
}
