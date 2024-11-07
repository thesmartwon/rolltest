import { defineConfig } from 'rolldown'

let files = new Set();

export default defineConfig({
	input: {
		entry: 'main.js',
	},
	plugins: [{
		name: "check for bundle change",
		writeBundle(_, b) {
			const fileList = Object.keys(b);
			const newFiles = new Set(fileList);
			if (files.size) {
				const added = Array.from(newFiles.difference(files));
				const removed = Array.from(files.difference(newFiles));
				if (added.length || removed.length) {
					console.error({ removed, added });
				}
			}
			files = newFiles;
		},
	}],
	output: {
		entryFileNames: "[name]-[hash].js",
		advancedChunks: {
			groups: [
				{ name: "vendor", test: /node_modules/ },
			]
		},
	},
	experimental: {
		strictExecutionOrder: true,
	},
})
