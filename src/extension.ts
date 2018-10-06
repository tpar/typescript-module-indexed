'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

interface NewModuleParams {
    fsPath: string;
    scheme: string;
}

export function activate(context: vscode.ExtensionContext) {

    let disposable = vscode.commands.registerCommand('New.Ts.Module', (args: NewModuleParams) => {
        
        const a = args;
        let input = '';
        vscode.window.showInputBox({
            placeHolder: 'Please enter the module name',
            prompt: 'Enter a hyphen seperated module name, e.g. new-ts-module',

        }).then(val => {
            input = val as string || '';
            console.debug(input);
        });

       

    });


    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}