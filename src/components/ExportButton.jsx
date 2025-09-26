import React from 'react';
import { FaFileExport } from 'react-icons/fa';

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
      className="flex items-center gap-3 py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg 
                 shadow-lg shadow-indigo-500/20 
                 hover:shadow-xl hover:shadow-indigo-500/40 
                 hover:bg-indigo-500
                 transform hover:-translate-y-1 active:translate-y-0
                 transition-all duration-300 ease-in-out
                 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600 disabled:hover:shadow-lg disabled:hover:transform-none"
      title={disabled ? "Ladda upp data först" : "Exportera till PDF"}
    >
      Export to PDF
      <FaFileExport />
    </button>
  );
}

export default ExportButton;
