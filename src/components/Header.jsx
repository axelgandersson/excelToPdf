import React from 'react';

function Header() {
  return (
    <header className="sticky top-0 z-10 bg-slate-900/60 backdrop-blur-lg border-b border-slate-700">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <svg className="h-8 w-8 text-indigo-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h1 className="text-xl font-bold text-slate-100">ExcelWebManager</h1>
        </div>

        <nav className="flex items-center space-x-2">
         
        </nav>
      </div>
    </header>
  );
}

export default Header;

