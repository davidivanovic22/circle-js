import { Component } from '../core/component';
import { Router } from '../core/router';

export class RouterService {
  private router: Router;

  constructor() {
    this.router = new Router();
  }

  registerRoute(path: string, component: typeof Component) {
    this.router.registerRoute(path, component);
  }

  navigateTo(path: string) {
    this.router.navigateTo(path);
  }

  setOutlet(outletSelector: string) {
    this.router.setOutlet(outletSelector);
  }
}
