import { NgModuleMetadata } from "./interfaces/framework-interfaces";

export function NgModule(options: NgModuleMetadata): ClassDecorator {
  return function (target: Function) {
    target.prototype.declarations = options.declarations || [];
    target.prototype.providers = options.providers || [];
  };
}
