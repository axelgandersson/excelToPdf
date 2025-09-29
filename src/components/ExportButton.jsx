import React from "react";
import { FaFileExport } from "react-icons/fa";

function ExportButton({ data }) {
  // disable om det inte finns något att exportera
  const disabled = !data?.columns?.length || !data?.rows?.length;

  //// LÄGG RIKTIG PDF EXPORT HÄR INNE
  const handleClick = () => {
    console.log("Export körs med data ", data);
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className="flex items-center gap-3 py-3 px-6 text-white font-semibold rounded-lg
                 bg-gradient-to-r from-indigo-600 to-violet-600
                 shadow-lg shadow-indigo-500/20
                 hover:from-indigo-500 hover:to-violet-500
                 hover:shadow-xl hover:shadow-indigo-500/40
                 transform hover:-translate-y-1 active:translate-y-0
                 transition-all duration-300 ease-in-out
                 focus:outline-none focus:ring-2 focus:ring-indigo-400/60
                 disabled:opacity-50 disabled:cursor-not-allowed"
      title={disabled ? "Ladda upp data först" : "Exportera till PDF"}
    >
      Export to PDF
      <FaFileExport />
    </button>
  );
}

export default ExportButton;
