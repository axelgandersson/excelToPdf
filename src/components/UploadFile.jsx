import EditableTable from "./EditableTable";
import ExportButton from "./ExportButton";
import { FaTrashAlt } from "react-icons/fa";
import { useUploadLogic } from "../logic/uploadLogic.js";
import {
  containerBase,
  containerMaxLarge,
  containerMaxSmall,
  dropzone,
  overlay,
  fileInput,
  dropContent,
  svgIcon,
  removeButton,
  tableWrapper,
} from "../styleVariables/uploadStyleNames.js";

export default function UploadFile() {
  // fetches all logic and state for file upload and data handling from uploadLogic.js
  const { data, fileInputRef, handleFileUpload, updateData, clearTableData } =
    useUploadLogic();

  return (
    <div
      className={`${containerBase} ${
        data.rows.length > 0 && data.columns.length > 0
          ? containerMaxLarge
          : containerMaxSmall
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
        <div className={dropzone}>
          <div className={overlay}></div>

          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            ref={fileInputRef}
            className={fileInput}
          />

          <div className={dropContent}>
            <svg
              className={svgIcon}
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
        data.columns.length > 0 && ( // only shows table and remove button if there's data
          <div className="mt-8 animate-fade-in-up">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-slate-100">
                File Data
              </h3>
              <button onClick={clearTableData} className={removeButton}>
                <FaTrashAlt />
                Remove File
              </button>
            </div>

            <div className={tableWrapper}>
              <EditableTable data={data} updateData={updateData} />
              <div className="mt-4">
                <ExportButton data={data} />
              </div>
            </div>
          </div>
        )}
    </div>
  );
}
