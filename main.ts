import { Editor, MarkdownView, Plugin } from 'obsidian'
// import { clipboard } from 'electron'
// Remember to rename these classes and interfaces!

export default class ObsidianPasteAsHtmlPlugin extends Plugin {
	async onload() {
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'paste-as-html',
			name: 'paste as html',
			hotkeys: [
				{
					modifiers: ['Alt', 'Shift'],
					key: 'v',
				},
			],
			editorCallback: async (editor: Editor, view: MarkdownView) => {
				const items = await navigator.clipboard.read()
				const textBlob = await items[0].getType('text/html')
				const text = await new Response(textBlob).text()
				editor.replaceSelection(text)
			},
		})
	}

	onunload() { }

	async loadSettings() { }

	async saveSettings() { }
}
