export function platformBrowserDynamic(): any {
    return {
      bootstrapModule: (module: any) => {
        // Create an instance of the module
        const appModule = new module();
  
        // Initialize the module
        appModule.init();
  
        // Bootstrap the module by rendering the initial view
        appModule.render();
  
        // Add any necessary event listeners or setup logic here
  
        // Handle any errors during bootstrapping
        appModule.onError((error: any) => {
          console.error('An error occurred during module bootstrap:', error);
        });
      }
    };
  }
  