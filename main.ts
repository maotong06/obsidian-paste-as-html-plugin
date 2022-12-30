import { Editor, MarkdownView, Plugin } from 'obsidian'

export default class ObsidianPasteAsHtmlPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'paste-as-html',
			name: 'paste as html',
			editorCallback: async (editor: Editor, view: MarkdownView) => {
				const items = await navigator.clipboard.read()
				const textBlob = await items[0].getType('text/html')
				const text = await new Response(textBlob).text()
				editor.replaceSelection(text)
			},
		})
	}
}
