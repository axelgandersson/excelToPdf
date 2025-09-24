
import { useState } from "react";
import * as XLSX from "xlsx";
import EditableTable from "./EditableTable";

export default function ExcelImporter() {
	const [data, setData] = useState([]); //Tom array som kommer fyllas

	// Funktion som körs när användaren väljer en fil i <input type="file">
	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		// Skapar en ny FileReader – ett inbyggt webbläsar-API för att läsa lokala filer.
		const reader = new FileReader();

		// pars med hjälp av browserns egna FileReader funktion och XLSX
		reader.onload = (e) => {
			const buffer = e.target.result;

			// type: "array" talar om att datan är ett Array
			const workbook = XLSX.read(buffer, { type: "array" });
			// Hämtar namnet på första kalkylbladet i filen.
			const sheetName = workbook.SheetNames[0];
			const sheet = workbook.Sheets[sheetName];

			const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

			//spara datan i usestate (data)
			setData(jsonData);
		};

		reader.readAsArrayBuffer(file); //jag fick konstiga medelanden när jag använde readAsBinaryString, tydligen inte något som man använder längre
	};

	return (
		<div>
			<h2>Upload Excel File</h2>
			<input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
			<EditableTable data={data} />
		</div>
	);
}

