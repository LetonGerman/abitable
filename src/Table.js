import React from "react";
import {
	useTable,
	useFilters,
	useGlobalFilter,
	useAsyncDebounce,
	useSortBy,
} from "react-table";
import { classNames } from "./shared/Utils";
import { SortIcon, SortUpIcon, SortDownIcon } from "./shared/Icons";
import ReactTooltip from "react-tooltip";

// Define a default UI for filtering
function GlobalFilter({
	preGlobalFilteredRows,
	globalFilter,
	setGlobalFilter,
}) {
	const count = preGlobalFilteredRows.length;
	const [value, setValue] = React.useState(globalFilter);
	const onChange = useAsyncDebounce((value) => {
		setGlobalFilter(value || undefined);
	}, 200);

	return (
		<label className="flex gap-x-2 items-baseline">
			<span className="text-gray-700">Поиск: </span>
			<input
				type="text"
				className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				value={value || ""}
				onChange={(e) => {
					setValue(e.target.value);
					onChange(e.target.value);
				}}
				placeholder={`${count} абитуриент(-а/-ов)...`}
			/>
		</label>
	);
}

// This is a custom filter UI for selecting
// a unique option from a list
export function SelectColumnFilter({
	column: { filterValue, setFilter, preFilteredRows, id, render },
}) {
	// Calculate the options for filtering
	// using the preFilteredRows
	const options = React.useMemo(() => {
		const options = new Set();
		preFilteredRows.forEach((row) => {
			options.add(row.values[id]);
		});
		return [...options.values()];
	}, [id, preFilteredRows]);

	// Render a multi-select box
	return (
		<label className="flex gap-x-2 items-baseline">
			<span className="text-gray-700">{render("Header")}: </span>
			<select
				className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
				name={id}
				id={id}
				value={filterValue}
				onChange={(e) => {
					setFilter(e.target.value || undefined);
				}}
			>
				<option value="">All</option>
				{options.map((option, i) => (
					<option key={i} value={option}>
						{option}
					</option>
				))}
			</select>
		</label>
	);
}

export function StatusPill({ value }) {
	const status = value ? value.toLowerCase() : "unknown";

	return (
		<span
			className={classNames(
				"px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
				status.startsWith("active") ? "bg-green-100 text-green-800" : null,
				status.startsWith("inactive") ? "bg-yellow-100 text-yellow-800" : null,
				status.startsWith("offline") ? "bg-red-100 text-red-800" : null
			)}
		>
			{status}
		</span>
	);
}

export function AvatarCell({ value, column, row }) {
	return (
		<div className="flex items-center">
			<div className="flex-shrink-0 h-10 w-10">
				<img
					className="h-10 w-10 rounded-full"
					src={row.original[column.imgAccessor]}
					alt=""
				/>
			</div>
			<div className="ml-4">
				<div className="text-sm font-medium text-gray-900">{value}</div>
				<div className="text-sm text-gray-500">
					{row.original[column.emailAccessor]}
				</div>
			</div>
		</div>
	);
}

function Table({ columns, data }) {
	// Use the state and functions returned from useTable to build your UI
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		rows,
		state,
		preGlobalFilteredRows,
		setGlobalFilter,
	} = useTable(
		{
			columns,
			data,
		},
		useFilters, // useFilters!
		useGlobalFilter,
		useSortBy // new
	);

	return (
		<>
			<ReactTooltip place="bottom" type="info" effect="solid" />
			<div className="sm:flex sm:gap-x-2">
				<GlobalFilter
					preGlobalFilteredRows={preGlobalFilteredRows}
					globalFilter={state.globalFilter}
					setGlobalFilter={setGlobalFilter}
				/>
				{headerGroups.map((headerGroup) =>
					headerGroup.headers.map((column) =>
						column.Filter ? (
							<div className="mt-2 sm:mt-0" key={column.id}>
								{column.render("Filter")}
							</div>
						) : null
					)
				)}
			</div>
			{/* table */}
			<div className="mt-4 flex flex-col">
				<div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table
								{...getTableProps()}
								className="min-w-full divide-y divide-gray-200"
							>
								<thead className="bg-gray-50">
									{headerGroups.map((headerGroup) => (
										<tr {...headerGroup.getHeaderGroupProps()}>
											{headerGroup.headers.map((column) => (
												// Add the sorting props to control sorting. For this example
												// we can add them into the header props
												<th
													scope="col"
													className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
													{...column.getHeaderProps(
														column.getSortByToggleProps()
													)}
													title="Сортировать"
												>
													<div className="flex items-center justify-between">
														{column.render("Header")}
														{/* Add a sort direction indicator */}
														<span>
															{column.isSorted ? (
																column.isSortedDesc ? (
																	<SortDownIcon className="w-4 h-4 text-gray-400" />
																) : (
																	<SortUpIcon className="w-4 h-4 text-gray-400" />
																)
															) : (
																<SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
															)}
														</span>
													</div>
												</th>
											))}
										</tr>
									))}
								</thead>
								<tbody
									{...getTableBodyProps()}
									className="bg-white divide-y divide-gray-200"
								>
									{rows.map((row, i) => {
										// new
										prepareRow(row);
										return (
											<tr
												{...row.getRowProps()}
												className="transition-colors hover:bg-blue-100"
											>
												{row.cells.map((cell) => {
													return (
														<td
															{...cell.getCellProps()}
															className="px-6 py-4 whitespace-nowrap"
															role="cell"
														>
															{cell.column.Cell.name === "defaultRenderer" ? (
																<div className="text-sm text-gray-500">
																	{cell.render("Cell")}
																</div>
															) : (
																cell.render("Cell")
															)}
														</td>
													);
												})}
											</tr>
										);
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			{/* Pagination */}
		</>
	);
}

export default Table;
