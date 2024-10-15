import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {

  public reaactiveMenu: MenuItem[] = [
    { title: 'Básico', route: './reactive/basic' },
    { title: 'Dinamico', route: './reactive/dynamic' },
    { title: 'Swithches', route: './reactive/switches' },
  ]

  public authMenu: MenuItem[] = [
    { title: 'Registro', route: './auth/sing-up' },
  ]
}
