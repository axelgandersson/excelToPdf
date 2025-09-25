import { useState } from "react";
import * as XLSX from "xlsx";
import EditableTable from "./EditableTable";

/*ExcelImporter läser in bladet och gör tillfälligt om till AOA.
-Konverterar sen direkt AOA till {Columns, rows} innan vi sätter state för det är det som EditableTable/MUI DataGrid vill ha*/

export default function ExcelImporter() {
  // State som innehåller tabellens columns and rows.
  const [data, setData] = useState({ columns: [], rows: [] });

  // Funktion som körs när användaren väljer en fil i <input type="file">
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Skapar en ny FileReader – ett inbyggt webbläsar-API för att läsa lokala filer.
    const reader = new FileReader();

    // pars med hjälp av browserns egna FileReader funktion och XLSX
    reader.onload = (e) => {
      const buffer = e.target.result;

      // läser in hela Excel-filen
      const workbook = XLSX.read(buffer, { type: "array" });
      // Hämtar namnet på första kalkylbladet i filen.
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      //Gör om arket till Array of Arrays (aoa)
      //Header: 1 -> första raden läses som kolumnnamn
      const aoa = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      //// Om bladet är tomt nollställ state och avbryt
      if (!aoa.length) {
        setData({ columns: [], rows: [] });
        return;
      }

      //Dela upp tabellen i headers + data-rader
      const [headers, ...rowsAoA] = aoa;

      //Bygg kolumnnamn, tom header får standradnamn
      const columns = headers.map((h, i) => String(h ?? `Column ${i + 1}`));

      // Bygg rows-objekt med id + cellvärden under respektive kolumnnamn
      const rows = rowsAoA.map((row, i) => {
        const obj = { id: i + 1 }; // MUI DataGrid kräver unikt id
        headers.forEach((h, idx) => {
          const key = String(h ?? `Column ${idx + 1}`);
          obj[key] = row[idx] ?? "";
        });
        return obj;
      });

      console.log("columns →", columns);
      console.log("rows (för DataGrid) →", rows);

      // Uppdatera state sen kan EditableTable kan rendera tabellen
      setData({ columns, rows });
    };

    // Läs filen
    reader.readAsArrayBuffer(file);
  };

  // Tar emot uppdaterade rader från EditableTable vid redigering
  const updateData = (newRows) =>
    setData((prev) => ({ ...prev, rows: newRows }));

  return (
    <div>
      <h2>Upload Excel File</h2>
      <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      <EditableTable data={data} updateData={updateData} />
    </div>
  );
}

//export default function ExcelImporter() {
//const [data, setData] = useState({ columns: [], rows: [] });
