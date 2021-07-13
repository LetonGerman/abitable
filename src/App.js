import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useMemo } from "react";
import parseTable from "./parseTable";
import ky from "ky";
import { useTable, useSortBy } from "react-table";

function Table({ columns, data }) {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable(
			{
				columns,
				data,
			},
			useSortBy
		);

	// We don't want to render all 2000 rows for this example, so cap
	// it at 20 for this use case
	const firstPageRows = rows.slice(0, 20);

	return (
		<>
			<table className="ReactTable" {...getTableProps()}>
				<thead>
					{headerGroups.map((headerGroup) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map((column) => (
								// Add the sorting props to control sorting. For this example
								// we can add them into the header props
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render("Header")}
									{/* Add a sort direction indicator */}
									<span>
										{column.isSorted
											? column.isSortedDesc
												? " 🔽"
												: " 🔼"
											: ""}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{firstPageRows.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<br />
			<div>Showing the first 20 results of {rows.length} rows</div>
		</>
	);
}

const App = () => {
	const [tableData, setTableData] = useState([]);
	const data = useMemo(
		() => [
			{
				name: "Hello",
				eg: "World",
				priority1: "wsw",
			},
			{
				name: "Hello",
				eg: "World",
				priority1: "wsw",
			},
			{
				name: "Hello",
				eg: "World",
				priority1: "wsw",
			},
		],
		[]
	);
	const columns = useMemo(
		() => [
			{
				Header: "Column 1",
				accessor: "name", // accessor is the "key" in the data
			},
			{
				Header: "Column 2",
				accessor: "eg",
			},
			{
				Header: "Приоритет",
				accessor: "priority1",
			},
		],
		[]
	);
	useEffect(() => {
		async function fetchData() {
			// You can await here
			const newTables = await requestTables();
			console.log("hm", newTables);
			setTableData(newTables);
			// ...
		}
		fetchData();
	}, []);

	const groupBy = (xs, key) => {
		return xs.reduce(function (rv, x) {
			(rv[x[key]] = rv[x[key]] || []).push(x);
			return rv;
		}, {});
	};

	const requestTables = async () => {
		// for (let i = 308; i <= 336; i++) {
		// 	const tableData = await scraper.get("http://www.some-fake-url.com");
		// }
		//const tableData = await scraper.get("http://www.some-fake-url.com");
		const tableData = await ky(
			"https://thingproxy.freeboard.io/fetch/https://abit.itmo.ru/bachelor/rating_rank/all/308/"
		).text();
		const parser = new DOMParser();
		const doc = parser.parseFromString(tableData, "text/html");
		const table = doc.querySelector("table");
		const tt = parseTable(table, 308);
		const groupedStudents = groupBy(tt, "ФИО");
		const studentsTable = [];
		for (let student in groupedStudents) {
			const newStudent = {
				name: groupedStudents[student][0]["ФИО"],
				eg: groupedStudents[student][0]["ЕГЭ"],
			};
			for (let entry of groupedStudents[student]) {
				console.log(entry);
				newStudent[`priority${entry["Номер заявления"]}`] = "308";
			}
			studentsTable.push(newStudent);
		}
		return studentsTable;
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logos" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			{tableData && <Table columns={columns} data={tableData} />}
		</div>
	);
};

export default App;
