
import * as fs from 'fs';

/**
 *  This will generate the ts module
 *  @param rootPath - this is the base path at which the folder for the module will be created
 *  @param moduleName - the name of the module (which is to be provided by user)
 *  @param osType - The OS on which VS Code is running. 
 */

export class ModuleGenerator {

    constructor(
        private rootPath: string, 
        private moduleName: string,
        private osType: string

    ) {}

    public create() {
        try {
            this.createModuleDir();
            this.createIndexFile();
            this.createModuleFile();
        }
        catch(ex) {
            throw(ex);
        }
    }

    private get tsModulePath(): string {
        if (this.osType === 'Windows_NT') {
            return this.rootPath + '\\' + this.moduleName;
        }

        return this.rootPath + '/' + this.moduleName;
    }

    private createModuleDir() {
		fs.mkdirSync(this.tsModulePath);
    }

    private createModuleFile() {
        const content = `\n` + `export class ${this.moduleName} {}`;
        this.createFile(this.moduleName + '.ts', content);
    }

    private createIndexFile() {
        const content = `export * from './${this.moduleName}'`;
        this.createFile('index.ts', content);
    }

    private createFile(fileName: string, content: string = '') {

        const path = this.osType === 'Windows_NT' ? (this.tsModulePath + '/' + fileName) 
            : this.tsModulePath + '\\' + fileName;

        fs.createWriteStream(path, {
            autoClose: true,
            encoding: 'UTF-8'
        })
        .write(content);
    }

}