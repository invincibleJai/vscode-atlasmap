import * as vscode from 'vscode';
import * as assert from 'assert';

describe('Test command present', () => {

	it("Start Atlasmap command executing without throwing error", async() => {
		await vscode.commands.executeCommand('atlasmap.start');
	});

	it("Open Atlasmap command executing without throwing error", async() => {
		await vscode.commands.executeCommand('atlasmap.start');
		await vscode.commands.executeCommand('atlasmap.open');
	});
});