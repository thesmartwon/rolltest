import { defineConfig } from 'rolldown'

export default defineConfig({
	input: {
		entry: 'main.js',
	},
	output: {
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
