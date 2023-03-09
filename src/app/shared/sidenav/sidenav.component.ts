
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navbarData } from './nav-data';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  sidebarVisible = false;
  navbarData = navbarData;
  isCollapsed = true;

  constructor(private route: Router) { }
  isActive(item: any): boolean {
    return this.route.url.split('/')[1] === item.routeLink;
  }

  toggle() {
    this.sidebarVisible = !this.sidebarVisible
  }
  ngOnInit(): void {

  }
}
