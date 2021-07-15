module.exports = {
	splitOnce: (string, splitter = " ") => {
		if (!string) return ["", ""];
		const i = string.indexOf(splitter);
		return [string.slice(0, i), string.slice(i + splitter.length)];
	},
	groupBy: (xs, key) =>
		xs.reduce((rv, x) => {
			// eslint-disable-next-line no-param-reassign
			(rv[x[key]] = rv[x[key]] || []).push(x);
			return rv;
		}, {}),
};
