export default {
	input: "main.js",
	output: {
		dir: "dist",
	},
	plugins: [
		{
			name: "thrower",
			generateBundle() {
				throw Error("asdf")
			}
		}
	],
};
