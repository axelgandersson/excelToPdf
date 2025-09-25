
import React from 'react';

function ExportButton({ data }) {
  const handleExport = () => {
    console.log("Exporterar data...", data);
  };

  return (
    <button 
      onClick={handleExport}
      className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg 
                 shadow-lg shadow-indigo-500/20 
                 hover:shadow-xl hover:shadow-indigo-500/40 
                 hover:bg-indigo-500
                 transform hover:-translate-y-1 active:translate-y-0
                 transition-all duration-300 ease-in-out"
    >
      Export Data
    </button>


  );
}

export default ExportButton;
