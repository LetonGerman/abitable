import "./App.css";
import { useState, useEffect, useMemo } from "react";
import Table from "./Table";
import { css } from "@emotion/react";
import travolta from "./lost.gif";
import parseTable from "./parseTable";
import ky from "ky";
import { DotLoader } from "react-spinners";
import { Transition } from "@headlessui/react";
import FilterSelect from "./FilterSelect";

const override = css`
	position: absolute;
	top: 50%;
	left: 50%;
	margin-left: -50px;
	margin-top: -50px;
	background-size: 100%;
	opacity: 1;
`;

const App = () => {
	const [tableData, setTableData] = useState([]);
	const [loadingTable, setLoadingTable] = useState(true);
	const [noData, setNoData] = useState(false);
	const [minScore, setMinScore] = useState(275);
	const [condition, setCondition] = useState({
		id: 1,
		name: "на бюджетное место в пределах особой квоты",
	});
	const columns = useMemo(
		() => [
			{
				Header: "ФИО",
				accessor: "name", // accessor is the "key" in the data
			},
			{
				Header: "ЕГЭ+ИД",
				accessor: "egid",
			},
			{
				Header: "ЕГЭ",
				accessor: "eg",
			},
			{
				Header: "Приоритет 1",
				accessor: "priority1",
				Cell: (row) => {
					return (
						<span
							className="text-sm text-gray-500"
							data-tip={splitOnce(row.value)[1]}
						>
							{splitOnce(row.value)[0]}
						</span>
					);
				},
			},
			{
				Header: "Приоритет 2",
				accessor: "priority2",
				Cell: (row) => {
					return (
						<span
							className="text-sm text-gray-500"
							data-tip={splitOnce(row.value)[1]}
						>
							{splitOnce(row.value)[0]}
						</span>
					);
				},
			},
			{
				Header: "Приоритет 3",
				accessor: "priority3",
				Cell: (row) => {
					return (
						<span
							className="text-sm text-gray-500"
							data-tip={splitOnce(row.value)[1]}
						>
							{splitOnce(row.value)[0]}
						</span>
					);
				},
			},
			{
				Header: "Приоритет 4",
				accessor: "priority4",
				Cell: (row) => {
					return (
						<span
							className="text-sm text-gray-500"
							data-tip={splitOnce(row.value)[1]}
						>
							{splitOnce(row.value)[0]}
						</span>
					);
				},
			},
		],
		[]
	);
	const programs = useMemo(() => {
		return {
			308: "01.03.02 «Прикладная математика и информатика»",
			309: "09.03.01 «Информатика и вычислительная техника»",
			310: "09.03.02 «Информационные системы и технологии»",
			311: "09.03.03 «Прикладная информатика»",
			312: "09.03.04 «Программная инженерия»",
			313: "10.03.01 «Информационная безопасность»",
			314: "11.03.02 «Инфокоммуникационные технологии и системы связи»",
			315: "11.03.03 «Конструирование и технология электронных средств»",
			316: "12.03.01 «Приборостроение»",
			317: "12.03.02 «Оптотехника»",
			318: "12.03.03 «Фотоника и оптоинформатика»",
			319: "12.03.04 «Биотехнические системы и технологии»",
			320: "12.03.05 «Лазерная техника и лазерные технологии»",
			321: "13.03.01 «Теплоэнергетика и теплотехника»",
			322: "13.03.02 «Электроэнергетика и электротехника»",
			323: "15.03.04 «Автоматизация технологических процессов и производств»",
			324: "15.03.06 «Мехатроника и робототехника»",
			325: "16.03.01 «Техническая физика»",
			326: "16.03.03 «Холодильная, криогенная техника и системы жизнеобеспечения»",
			327: "18.03.01 «Химическая технология»",
			328: "18.03.02 «Энерго- и ресурсосберегающие процессы в химической технологии, нефтехимии и биотехнологии»",
			329: "19.03.01 «Биотехнология»",
			330: "23.03.03 «Эксплуатация транспортно-технологических машин и комплексов»",
			331: "24.03.02 «Системы управления движением и навигация»",
			332: "27.03.04 «Управление в технических системах»",
			333: "13.03.01 «27.03.05 «Инноватика»",
			334: "38.03.05 «Бизнес-информатика»",
			335: "44.03.04 «Профессиональное обучение»",
			336: "45.03.04 «Интеллектуальные системы в гуманитарной сфере»",
		};
	}, []);

	async function fetchData() {
		// You can await here
		setNoData(false);
		setLoadingTable(true);
		let newTables;
		try {
			newTables = await requestTables();
		} catch (e) {
			setLoadingTable(false);
			setNoData(true);
			return;
		}
		setTableData(newTables);
		setLoadingTable(false);
		if (tableData.length < 1) {
			setNoData(true);
		}
		// ...
	}

	const validateMinScore = (score) => {
		if (score > 300) {
			setMinScore(300);
		} else if (score < 0) {
			setMinScore(0);
		} else {
			setMinScore(score);
		}
	};

	useEffect(() => {
		fetchData();
	});

	const groupBy = (xs, key) => {
		return xs.reduce(function (rv, x) {
			(rv[x[key]] = rv[x[key]] || []).push(x);
			return rv;
		}, {});
	};

	const splitOnce = (string, splitter = " ") => {
		if (!string) return ["", ""];
		const i = string.indexOf(splitter);
		return [string.slice(0, i), string.slice(i + splitter.length)];
	};

	const requestTables = async () => {
		const students = [];
		for (let n in programs) {
			const tableData = await ky(
				`https://thingproxy.freeboard.io/fetch/https://abit.itmo.ru/bachelor/rating_rank/all/${n}/`
			).text();
			const parser = new DOMParser();
			const doc = parser.parseFromString(tableData, "text/html");
			const table = doc.querySelector("table");
			const parsedData = parseTable(table, n, minScore, condition);
			students.push(parsedData);
		}
		//const tableData = await scraper.get("http://www.some-fake-url.com");

		const groupedStudents = groupBy(students.flat(1), "ФИО");
		const studentsTable = [];
		for (let student in groupedStudents) {
			const newStudent = {
				name: groupedStudents[student][0]["ФИО"],
				eg: groupedStudents[student][0]["ЕГЭ"],
				egid: groupedStudents[student][0]["ЕГЭ+ИД"],
			};
			for (let entry of groupedStudents[student]) {
				newStudent[`priority${entry["Номер заявления"]}`] =
					programs[entry.program];
			}
			studentsTable.push(newStudent);
		}
		return studentsTable;
	};
	return (
		<div className="min-h-screen bg-gray-100 text-gray-900 pt-2">
			<main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
				<div className="flex flex-auto items-center justify-center">
					<span className="mx-1">Абитуриенты с условием поступления</span>
					<FilterSelect value={condition} onConditionChange={setCondition} />
					<span className="mx-1">и баллом ЕГЭ не менее</span>
					<div className="relative inline-block">
						<input
							type="number"
							value={minScore}
							onChange={(e) => {
								validateMinScore(e.target.value || undefined);
							}}
							name=""
							id=""
							min="0"
							max="300"
							className="py-2 pl-3 pr-2 mx-1 text-left bg-white rounded-lg shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"
						/>
					</div>
				</div>
				<div className="flex justify-center">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-3"
						onClick={fetchData}
					>
						Обновить
					</button>
				</div>
				<Transition
					show={loadingTable}
					enter="transition-opacity duration-250"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition-opacity duration-250"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<DotLoader
						color="#1946ba"
						loading={loadingTable}
						css={override}
						size={175}
					/>
				</Transition>
				<div className="mt-6">
					<Transition
						show={!loadingTable && tableData.length > 0}
						enter="transition-opacity duration-250"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-250"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Table columns={columns} data={tableData} />
					</Transition>
					<Transition
						show={noData}
						enter="transition-opacity duration-250"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-250"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="flex justify-center align-center">
							<img src={travolta} alt="travolta is confused" />
						</div>
					</Transition>
				</div>
			</main>
		</div>
	);
};

export default App;
