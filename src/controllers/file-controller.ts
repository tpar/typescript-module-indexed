
import * as fs from 'fs';

export class FileController {

    constructor(private path: string) {}

    public async createIndex() {
        await this.createFile('index.ts');
    }

    private async createFile(name: string) {
        const filePath = this.path + '/' + name;
        await fs.writeFile(filePath, 'abc', (err) => {
            throw(err);
        });
    }

}