import { useState, useRef, useEffect } from "react";
import * as XLSX from "xlsx";
import EditableTable from "./EditableTable";
import ExportButton from "./ExportButton";
import { FaTrashAlt } from "react-icons/fa";

export default function UploadFile() {
  // State som innehåller tabellens columns and rows.
  const [data, setData] = useState({ columns: [], rows: [] });

  // skapar Ref för att kunna nollställa filinputen vid borttagning av fil (annars kan inte filen väljas igen)
  const fileInputRef = useRef(null);

  const isFirstRender = useRef(true); // ref som kommer ihåg om det är första rendern, för att undvika att skriva över localstorage vid mount/refresh av sidan

  // körs vid mount för att kolla om data finns i localstorage
  useEffect(() => {
    const savedData = localStorage.getItem("tableData"); // kolla localstorage om data finns sparad
    if (savedData) {
      setData(JSON.parse(savedData)); // sätter state med sparad data
    }
  }, []);

  // sparar data i localstorage och körs varje gång data ändras
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // hoppar över första rendern (vid mount/refresh) för att inte skriva över localstorage och visa tom data
    }

    localStorage.setItem("tableData", JSON.stringify(data)); // spara data i localstorage
  }, [data]);

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

  // funktion för att rensa tabellens data/ta bort filen
  function clearTableData() {
    setData({ columns: [], rows: [] });

    if (fileInputRef.current) {
      fileInputRef.current.value = null; // nollställer filinputen så samma fil kan väljas igen
    }
  }

  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl p-8 w-full transition-all duration-300 ${
        data.rows.length > 0 && data.columns.length > 0
          ? "max-w-7xl"
          : "max-w-4xl"
      }`}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">
          Upload Your Excel Files
        </h2>
        <p className="text-slate-400">
          Drag & drop your files below or click to browse
        </p>
      </div>

      <div className="mt-8">
        <div
          className="relative group flex flex-col items-center justify-center h-56 rounded-lg
                     border-2 border-dashed border-slate-600
                     transition-colors duration-300
                     cursor-pointer
                     dropzone-pulse                      /* ny, säker pulse */
                     hover:border-indigo-400 overflow-hidden"
        >
          <div className="absolute inset-0 bg-indigo-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            ref={fileInputRef}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
          />

          <div className="relative z-10 flex flex-col items-center text-slate-400 group-hover:text-slate-100 transition-colors duration-300">
            <svg
              className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:-translate-y-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="font-semibold">Drop Excel files here</p>
            <p className="text-sm">or click to browse </p>
          </div>
        </div>
      </div>

      {data.rows.length > 0 &&
        data.columns.length > 0 && ( // visar bara editabletable-komponenten och "remove file"-knappen om data finns/hämtats
          <div className="mt-8 animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-slate-100">
                File Data
              </h3>
              <button
                onClick={clearTableData}
                className="flex items-center gap-3 py-3 px-6 bg-rose-600 text-white font-semibold rounded-lg
                         shadow-lg shadow-rose-500/20
                         hover:shadow-xl hover:shadow-rose-500/40
                         hover:bg-rose-500
                         transform hover:-translate-y-1 active:translate-y-0
                         transition-all duration-300 ease-in-out
                         focus:outline-none focus:ring-2 focus:ring-rose-400/60"
              >
                <FaTrashAlt />
                Remove File
              </button>
            </div>

            <div className="bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-xl p-6 shadow-2xl">
              <EditableTable data={data} updateData={updateData} />
              {/* Skicka tabell-datan till knappen */}
              <div className="mt-4">
                <ExportButton data={data} />
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
