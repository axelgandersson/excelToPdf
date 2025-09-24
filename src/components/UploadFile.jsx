import React from 'react';

function UploadFile({ onFileUpload }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl p-8 w-full max-w-2xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">Upload Your Excel Files</h2>
        <p className="text-slate-400">Drag & drop your files below or click to browse</p>
      </div>

      <div className="mt-8">
        <div 
          className="relative group flex flex-col items-center justify-center h-56 rounded-lg 
                     border-2 border-dashed
                     transition-all duration-300 
                     cursor-pointer 
                     animate-pulse-border group-hover:animate-none group-hover:border-indigo-400 group-hover:scale-105"
        >
          <div className="absolute inset-0 bg-indigo-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10 flex flex-col items-center text-slate-400 group-hover:text-slate-100 transition-colors duration-300">
            <svg className="w-16 h-16 mb-4 transform transition-transform duration-300 group-hover:-translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
            </svg>
            <p className="font-semibold">Drop files here</p>
            <p className="text-sm">or click to browse</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadFile;
