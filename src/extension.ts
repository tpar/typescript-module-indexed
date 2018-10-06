'use strict';

import * as vscode from 'vscode';
import * as fs from 'fs';

interface NewModuleParams {
	fsPath: string;
	scheme: string;
}

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('New.Ts.Module', async (args: NewModuleParams) => {
	
		try {
			const moduleName = await vscode.window.showInputBox({
				placeHolder: 'Please enter the module name',
				prompt: 'Enter a hyphen seperated module name, e.g. new-ts-module',
			});

			if (moduleName) {
				const commands = await vscode.commands.getCommands();
				console.log(commands); 
				fs.mkdirSync(args.fsPath + '/' + moduleName);
			}
		}

		catch(ex) {
			console.error(ex);
		}

		

	});


	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}