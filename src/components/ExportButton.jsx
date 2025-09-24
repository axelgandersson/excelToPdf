import { FaFileExport } from "react-icons/fa";

function ExportButton() {
  return (
    <div>
      <button className="flex items-center gap-3 py-3 px-5 bg-slate-900 text-white cursor-pointer rounded-3xl hover:bg-slate-700 transition font-semibold border-l-8 border-slate-700">
        Export to PDF
        <span>
          <FaFileExport />
        </span>
      </button>
    </div>
  );
}

export default ExportButton;
