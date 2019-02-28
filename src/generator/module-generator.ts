
import * as fs from 'fs';
import * as path from 'path';

/**
 *  This will generate the ts module
 *  @param rootPath - this is the base path at which the folder for the module will be created
 *  @param moduleName - the name of the module (which is to be provided by user)
 */

export class ModuleGenerator {

    constructor(
        private rootPath: string, 
        private moduleName: string,
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
        return path.join(this.rootPath, this.moduleName);
    }

    private createModuleDir() {
		fs.mkdirSync(this.tsModulePath);
    }

    private generateClassName() {
        if (this.moduleName.indexOf('-') > -1 ) {
            return this.moduleName.split('-')
                .map(part => { return part.charAt(0).toUpperCase() + part.substr(1);})
                .join('');
        }

        return this.moduleName;
    }

    private createModuleFile() {
        const name = this.generateClassName();
        const content = `\n` + `export class ${name} {}`;
        this.createFile(this.moduleName + '.ts', content);
    }

    private createIndexFile() {
        const content = `export * from './${this.moduleName}';`;
        this.createFile('index.ts', content);
    }

    private createFile(fileName: string, content: string = '') {

        const tgtPath = path.join(this.tsModulePath, fileName);

        fs.createWriteStream(tgtPath, {
            autoClose: true,
            encoding: 'UTF-8'
        })
        .write(content);
    }

}