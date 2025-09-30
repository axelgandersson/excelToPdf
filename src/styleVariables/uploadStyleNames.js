// Centralized className strings for UploadFile component
// Export named constants so JSX stays clean and easier to maintain

export const containerBase =
  "bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl p-8 w-full transition-all duration-300";
export const containerMaxLarge = "max-w-7xl";
export const containerMaxSmall = "max-w-4xl";

export const dropzone =
  "relative group flex flex-col items-center justify-center h-56 rounded-lg border-2 border-dashed border-slate-600 transition-colors duration-300 cursor-pointer dropzone-pulse hover:border-indigo-400 overflow-hidden";

export const overlay =
  "absolute inset-0 bg-indigo-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none";

export const fileInput =
  "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20";

export const dropContent =
  "relative z-10 flex flex-col items-center text-slate-400 group-hover:text-slate-100 transition-colors duration-300";

export const svgIcon =
  "w-16 h-16 mb-4 transition-transform duration-300 group-hover:-translate-y-1";

export const removeButton =
  "flex items-center gap-3 py-3 px-6 bg-rose-600 text-white font-semibold rounded-lg shadow-lg shadow-rose-500/20 hover:shadow-xl hover:shadow-rose-500/40 hover:bg-rose-500 transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-rose-400/60";

export const tableWrapper =
  "bg-slate-800/60 backdrop-blur-xl border border-slate-700 rounded-xl p-6 shadow-2xl";

export default {
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
};
