import * as vscode from "vscode";

export async function activate(
	context: vscode.ExtensionContext
): Promise<void> {
	context.subscriptions.push(
		vscode.commands.registerCommand("extension.importFromSublime", () => {
			vscode.window.showWarningMessage(
				"Importing from local Sublime settings is currently only possible when running in the desktop.",
				{ modal: true }
			);
		})
	);
}
