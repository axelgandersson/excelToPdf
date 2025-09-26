import React from 'react';
import Header from './components/Header.jsx';
import UploadFile from './components/UploadFile.jsx';
import EditableTable from './components/EditableTable.jsx';
import Footer from './components/Footer.jsx';
import Background from './components/Background.jsx';

function App() {
  return (
    <div className="relative flex flex-col min-h-screen text-white font-sans overflow-x-hidden">
      <Background />

      <div className="animate-fade-in-down [animation-delay:0.1s]">
        <Header />
      </div>

      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="animate-fade-in-up [animation-delay:0.3s]">
          <UploadFile />
        </div>
        
        {/* Table section */}
        <section className="card mt-8">
          <EditableTable />
        </section>
      </main>

      <div className="animate-fade-in-up [animation-delay:0.5s]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
