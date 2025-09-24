import React from 'react';
import Header from './components/Header';
import UploadFile from './components/UploadFile';
import Footer from './components/Footer';
import Background from './components/Background';



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
      </main>

      <div className="animate-fade-in-up [animation-delay:0.5s]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
