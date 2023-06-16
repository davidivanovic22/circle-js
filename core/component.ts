import { ComponentOptions } from "./interfaces/framework-interfaces";


export function Component(options: ComponentOptions): ClassDecorator {
    return function(target: Function) {
      target.prototype.selector = options.selector;
      target.prototype.templateUrl = options.templateUrl;
      target.prototype.styleUrls = options.styleUrls || [];
    };
  }
  