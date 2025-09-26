import { FaFileExport } from "react-icons/fa";

function ExportButton({ data }) {
  // disable om det inte finns något att exportera
  const disabled = !data?.columns?.length || !data?.rows?.length;

  //// LÄGG RIKTIG PDF EXPORT HÄR INNE
  const handleClick = () => {
    console.log("Export körs med data ", data);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={disabled}
        className="flex items-center gap-3 py-3 px-5 bg-slate-900 text-white cursor-pointer rounded-3xl hover:bg-slate-700 transition font-semibold border-l-8 border-slate-700"
        title={disabled ? "Ladda upp data först" : "Exportera till PDF"}
      >
        Export to PDF
        <span>
          <FaFileExport />
        </span>
      </button>
    </div>
  );
}

export default ExportButton;
