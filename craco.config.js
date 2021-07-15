/* eslint-disable */
module.exports = {
	style: {
		postcss: {
			plugins: [require("tailwindcss"), require("autoprefixer")],
		},
	},
	eslint: {
		enable: true,
		mode: "extends" /* (default value) */ || "file",
		configure: {
			extends: [
				"airbnb",
				"plugin:import/errors",
				"plugin:react/recommended",
				"plugin:jsx-a11y/recommended",
				"plugin:react-hooks/recommended",
				"prettier",
			],
			rules: {
				"react/prop-types": 0,
				"react/react-in-jsx-scope": 0,
			},
			plugins: ["react", "import", "jsx-a11y"],
			parser: "@babel/eslint-parser",
			parserOptions: {
				ecmaVersion: 2021,
				sourceType: "module",
				ecmaFeatures: {
					jsx: true,
				},
			},
			env: {
				es6: true,
				commonjs: true,
				browser: true,
				node: true,
			},
			settings: {
				react: {
					version: "detect",
				},
			},
		},
	},
	babel: {
		plugins: ["@babel/plugin-proposal-class-properties"],
	},
};
