import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";

const conditions = [
	{ id: 0, name: "без вступительных испытаний" },
	{ id: 1, name: "на бюджетное место в пределах особой квоты" },
	{ id: 2, name: "на бюджетное место в пределах целевой квоты" },
	{ id: 3, name: "по общему конкурсу" },
	{ id: 4, name: "на контрактной основе" },
];

function FilterSelect(props) {
	const handleChange = (e) => {
		props.onConditionChange(e);
	};

	return (
		<Listbox value={conditions[props.value.id]} onChange={handleChange}>
			<div className="relative mt-1">
				<Listbox.Button className="relative py-2 pl-3 pr-10 mx-1 text-left bg-white rounded-lg shadow-sm cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
					<span className="block truncate">{props.value.name}</span>
					<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<SelectorIcon
							className="w-5 h-5 text-gray-400"
							aria-hidden="true"
						/>
					</span>
				</Listbox.Button>
				<Transition
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className="absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
						{conditions.map((condition, personIdx) => (
							<Listbox.Option
								key={personIdx}
								className={({ active }) =>
									`${active ? "text-gray-900 bg-blue-100" : "text-gray-700"}
                          cursor-default select-none relative py-2 pl-10 pr-4`
								}
								value={condition}
							>
								{({ selected, active }) => (
									<>
										<span
											className={`${
												selected ? "font-medium" : "font-normal"
											} block truncate`}
										>
											{condition.name}
										</span>
										{selected ? (
											<span
												className={`${
													active ? "text-amber-600" : "text-amber-600"
												}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
											>
												<CheckIcon className="w-5 h-5" aria-hidden="true" />
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
}

export default FilterSelect;
