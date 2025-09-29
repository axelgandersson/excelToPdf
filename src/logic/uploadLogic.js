import { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";

// Custom hook that centralizes upload logic for the UploadFile component.
// Exposes: data, fileInputRef, handleFileUpload, updateData, clearTableData
export function useUploadLogic() {
	const [data, setData] = useState({ columns: [], rows: [] });
	const fileInputRef = useRef(null);
	const isFirstRender = useRef(true);

	// Load saved data from localStorage on mount
	useEffect(() => {
		const saved = localStorage.getItem("tableData");
		if (saved) setData(JSON.parse(saved));
	}, []);

	// Persist to localStorage when data changes (skip first render)
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		localStorage.setItem("tableData", JSON.stringify(data));
	}, [data]);

	// Handle file input change. Reads first sheet and converts to {columns, rows}
	const handleFileUpload = (e) => {
		const file = e?.target?.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = (ev) => {
			const buffer = ev.target.result;
			const workbook = XLSX.read(buffer, { type: "array" });
			const sheetName = workbook.SheetNames[0];
			const sheet = workbook.Sheets[sheetName];

			const aoa = XLSX.utils.sheet_to_json(sheet, { header: 1 });
			if (!aoa.length) {
				setData({ columns: [], rows: [] });
				return;
			}

			const [headers, ...rowsAoA] = aoa;
			const columns = headers.map((h, i) => String(h ?? `Column ${i + 1}`));
			const rows = rowsAoA.map((row, i) => {
				const obj = { id: i + 1 };
				headers.forEach((h, idx) => {
					const key = String(h ?? `Column ${idx + 1}`);
					obj[key] = row[idx] ?? "";
				});
				return obj;
			});

			setData({ columns, rows });
		};

		reader.readAsArrayBuffer(file);
	};

	const updateData = (newRows) =>
		setData((prev) => ({ ...prev, rows: newRows }));

	const clearTableData = () => {
		setData({ columns: [], rows: [] });
		if (fileInputRef.current) fileInputRef.current.value = null;
	};

	return { data, fileInputRef, handleFileUpload, updateData, clearTableData };
}
