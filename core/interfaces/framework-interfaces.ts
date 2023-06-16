export interface Type<T> extends Function {
    new (...args: any[]): T;
  }
  
  export interface ModuleWithProviders<T> {
    ngModule: Type<T>;
    providers?: any[];
  }
  
  export interface SchemaMetadata {
    name: string;
    schema: any;
  }
  
  export interface Provider {
    provide: any;
    useValue?: any;
    useClass?: Type<any>;
    useExisting?: any;
    useFactory?: Function;
    deps?: any[];
    multi?: boolean;
  }
  
  export interface NgModuleMetadata {
    declarations?: Array<Type<any> | any[]>;
    imports?: Array<Type<any> | ModuleWithProviders<{}> | any[]>;
    exports?: Array<Type<any> | any[]>;
    providers?: Provider[];
    entryComponents?: Array<Type<any> | any[]>;
    bootstrap?: any;
    schemas?: Array<SchemaMetadata | any[]>;
    id?: string;
  }
  
  export interface ComponentOptions {
      selector: string;
      templateUrl: string;
      styleUrls?: string[];
      providers?: Provider[];
      // Other optional properties specific to your component
    }
  