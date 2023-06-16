import { Component } from "./component";

export class Router {
    routes: { [key: string]: typeof Component } = {};
    outlet: HTMLElement | null = null;
  
    registerRoute(path: string, component: typeof Component) {
      this.routes[path] = component;
    }
  
    navigateTo(path: string) {
      const component = this.routes[path];
      if (component && this.outlet) {
        this.outlet.innerHTML = '';
        const element = document.createElement(component.prototype.selector);
        this.outlet.appendChild(element);
        component.prototype.render.call(element);
      }
    }
  
    setOutlet(outletSelector: string) {
      this.outlet = document.querySelector(outletSelector);
    }
  }
  