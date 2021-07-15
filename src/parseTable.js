/**
 * @license
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014 Nick Williams
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

const availableConditions = [
	"без вступительных испытаний",
	"на бюджетное место в пределах особой квоты",
	"на бюджетное место в пределах целевой квоты",
	"по общему конкурсу",
	"на контрактной основе",
];

/**
 * generates factory functions to convert table rows to objects,
 * based on the titles in the table's <thead>
 * @param  {Array<String>} headings the values of the table's <thead>
 * @return {(row: HTMLTableRowElement) => Object} a function that takes a table row and spits out an object
 */
function mapRow(headings) {
	return function mapRowToObject({ cells }) {
		return (
			[...cells]
				// .slice(quotaIndex, quotaIndex + quotaCell.rowSpan)
				.filter((cell) => !cell.classList.contains("hdr"))
				.reduce((result, cell, i) => {
					const input = cell.querySelector("input,select");
					let value;

					if (input) {
						value = input.type === "checkbox" ? input.checked : input.value;
					} else {
						value = cell.innerText.trim();
					}

					return Object.assign(result, { [headings[i]]: value });
				}, {})
		);
	};
}

/**
 * given a table, generate an array of objects.
 * each object corresponds to a row in the table.
 * each object's key/value pairs correspond to a column's heading and the row's value for that column
 *
 * @param  {HTMLTableElement} table the table to convert
 * @return {Array<Object>}       array of objects representing each row in the table
 */
function parseTable(
	table,
	program,
	minScore = 275,
	condition = "на бюджетное место в пределах особой квоты"
) {
	const cells = [...table.tBodies[0].rows[0].cells];
	const moreCells = [...table.tBodies[0].rows[1].cells];
	const spanHeadingsIndexes = cells
		.filter((heading) => heading.colSpan > 1)
		.map((filteredHeading) => ({
			position: filteredHeading.cellIndex,
			span: filteredHeading.colSpan,
		}));

	let prevIndex;
	spanHeadingsIndexes.forEach((spindex) => {
		cells.splice(
			spindex.position,
			1,
			...moreCells.slice(prevIndex || 0, spindex.span)
		);
		prevIndex = spindex.position;
	});
	const headings = [...cells].map((heading) => heading.innerText.trim());
	headings.shift();

	const tableRows = [...table.tBodies[0].rows].filter(
		(row) => !row.classList.contains("hdr")
	);

	if (condition.name === "любым") {
		const quotaIndexes = [];
		const quotaRanges = [];
		const quotaRows = tableRows.filter((cell, index) => {
			if (availableConditions.includes(cell.firstChild.innerText.trim())) {
				quotaIndexes.push(index);
			}
			return availableConditions.includes(cell.firstChild.innerText.trim());
		});
		if (!quotaRows[0]) {
			return [];
		}
		quotaIndexes.forEach((quotaIndex, i) => {
			quotaRanges.push(
				tableRows.slice(
					quotaIndex,
					quotaIndex + quotaRows[i].firstChild.rowSpan
				)
			);
			quotaRanges[i][0].cells[0].parentNode.removeChild(
				quotaRanges[i][0].cells[0]
			);
		});
		const mappedRows = quotaRanges
			.flat()
			.map(mapRow(headings))
			.filter((row) => +row["ЕГЭ"] >= minScore);
		mappedRows.forEach((row) => {
			row.program = program;
		});
		return mappedRows;
	}

	let quotaIndex;
	const quotaRow = tableRows.filter((cell, index) => {
		if (cell.firstChild.innerText.trim() === condition.name) {
			quotaIndex = index;
		}
		return cell.firstChild.innerText.trim() === condition.name;
	});
	if (!quotaRow[0]) {
		return [];
	}
	const quotaRange = tableRows.slice(
		quotaIndex,
		quotaIndex + quotaRow[0].firstChild.rowSpan
	);
	quotaRange[0].cells[0].parentNode.removeChild(quotaRange[0].cells[0]);

	const mappedRows = quotaRange
		.map(mapRow(headings))
		.filter((row) => +row["ЕГЭ"] >= minScore);
	mappedRows.forEach((row) => {
		row.program = program;
	});
	return mappedRows;
}

export default parseTable;
