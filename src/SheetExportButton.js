import XLSX from "xlsx";
import { DocumentReportIcon } from "@heroicons/react/outline";
import { splitOnce } from "./helperFunctions";

const knownCols = {
	name: "ФИО",
	eg: "ЕГЭ",
	egid: "ЕГЭ+ИД",
	priority1: "Приоритет 1",
	place1: "Место 1",
	priority2: "Приоритет 2",
	place2: "Место 2",
	priority3: "Приоритет 3",
	place3: "Место 3",
	priority4: "Приоритет 4",
	place4: "Место 4",
};

const SheetExportButton = ({ tableData }) => {
	const prepareJSON = async (json) => {
		const newEntries = [];
		json.forEach((entry) => {
			const newJson = {};
			Object.keys(entry).forEach((property) => {
				if (property.startsWith("priority")) {
					[newJson[knownCols[property]]] = splitOnce(entry[property]);
				} else {
					newJson[knownCols[property]] = entry[property];
				}
			});
			newEntries.push(newJson);
		});
		return newEntries;
	};
	const exportXLSX = async () => {
		const transformedData = await prepareJSON(tableData);
		const ws = XLSX.utils.json_to_sheet(transformedData, {
			header: [
				"ФИО",
				"ЕГЭ",
				"ЕГЭ+ИД",
				"Приоритет 1",
				"Место 1",
				"Приоритет 2",
				"Место 2",
				"Приоритет 3",
				"Место 3",
				"Приоритет 4",
				"Место 4",
			],
		});
		const wb = XLSX.utils.book_new();
		const objectMaxLength = [];

		// eslint-disable-next-line array-callback-return
		transformedData.map((jsonData) =>
			// eslint-disable-next-line array-callback-return
			Object.entries(jsonData).map(([, v], idx) => {
				const columnValue = v.toString();
				objectMaxLength[idx] =
					objectMaxLength[idx] >= columnValue.length
						? objectMaxLength[idx]
						: columnValue.length;
			})
		);

		ws["!cols"] = objectMaxLength.map((w) => ({ width: w + 5 }));
		XLSX.utils.book_append_sheet(wb, ws, "Abit");

		/* generate XLSX file and send to client */
		const timeStamp = new Date();
		const dateFormatOptions = {
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
			timeZone: "Europe/Moscow",
		};
		XLSX.writeFile(
			wb,
			`Абит ${new Intl.DateTimeFormat("ru-RU", dateFormatOptions).format(
				timeStamp
			)}.xlsx`
		);
	};
	return (
		<button
			type="button"
			className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg mt-3"
			onClick={() => {
				exportXLSX();
			}}
		>
			<DocumentReportIcon className="h-5 w-5" />
		</button>
	);
};

export default SheetExportButton;
