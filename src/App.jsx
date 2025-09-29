import React from "react";
import Header from "./components/Header.jsx";
import UploadFile from "./components/UploadFile.jsx";
import Footer from "./components/Footer.jsx";
import Background from "./components/Background.jsx";
function App() {
    return (
        <div className="relative flex flex-col min-h-screen text-white font-sans overflow-x-hidden">
            {/* Bakgrund */}
            <Background />

            {/* Header – fullbredd */}
            <header className="w-full animate-fade-in-down [animation-delay:0.1s]">
                <Header />
            </header>

            {/* Main – centrerad med maxbredd */}

            <main className="mx-auto max-w-7xl px-4 py-6 flex-1 grid gap-6">
                {/* Upload + tabell (hanteras i UploadFile) */}
                <section className="animate-fade-in-up [animation-delay:0.3s]">
                    <UploadFile />
                </section>
            </main>

            {/* Footer – fullbredd */}
            <footer className="w-full animate-fade-in-up [animation-delay:0.5s] text-sm text-center">
                <Footer />
            </footer>
        </div>
    );
}

export default App;
