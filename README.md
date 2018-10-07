# typescript-module-indexed README

This is a simple VS Code extension to create an "indexed typescript module." It appears in the file explorer menu of vs code. Upon user input, of new TS module e.g. "MyModule" the following files will be created

+ MyModule
    - MyModule.ts
    - Index.ts
    
I personally like to have a index.ts file for ts modules, to easily organise exports. I built this as a basic productivity tool.

Link in Marketplace:
https://marketplace.visualstudio.com/items?itemName=tejasp.typescript-module-indexed


## Features

Creation of Module as below,

+ MyModule
    - MyModule.ts
    - Index.ts
    
+ my-module
    - my-module.ts
    - Index.ts
    
In the second case, in my-module.ts, a class will be defined, called MyModule. 

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues
No support for ts react (.tsx) modules yet - I need to add that functionality in

## Release Notes

### 0.0.2

hyphen seperated module names resolution

### 0.0.1
First release. Create a module - to generate a ts file and an index file associated with it

-----------------------------------------------------------------------------------------------------------

