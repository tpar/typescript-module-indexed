'use strict';

import * as vscode from 'vscode';

import { CommmandIds } from './commands/commands';

import { ModuleGenerator } from './generator/module-generator';

interface NewModuleParams {
	fsPath: string;
	scheme: string;
}

async function execNewTsModuleCommand(args: NewModuleParams) {
	try {
		const moduleName = await vscode.window.showInputBox({
			placeHolder: 'Please enter the module name',
			prompt: 'Enter a module name, e.g. new-ts-module',
		});

		if (moduleName) {
			new ModuleGenerator(args.fsPath, moduleName).create();
		}
	}

	catch(ex) {
		console.error(ex);
	}
} 

export function activate(context: vscode.ExtensionContext) {

	let items = [
		vscode.commands.registerCommand(CommmandIds.NEW_TS_MODULE_COMMAND_ID, async (args: NewModuleParams) => {
			await execNewTsModuleCommand(args);
		}),

		vscode.commands.registerCommand(CommmandIds.NEW_TS_MODULE_CUSTOM_COMMAND_ID, async (args: NewModuleParams) => {
			await execNewTsModuleCommand(args);
		})
	];

	context.subscriptions.push(...items);
}

// this method is called when your extension is deactivated
export function deactivate() {
}
